import cv2
import numpy as np
from ultralytics import YOLO
from transformers import pipeline
from PIL import Image
from norfair import Detection, Tracker, draw_points


choices=[
    "yolov10n",
    "yolov10s",
    "yolov10m",
    "yolov10b",
    "yolov10l",
    "yolov10x",
]

model_id= "yolov10m"
image_size= 640
conf_threshold = 0.75

def convert(yolo_detections):
    norfair_detections = []
    for result in yolo_detections[0].boxes:
        bbox = np.array(
            [
                [result.xywh[0][0].item(), result.xywh[0][1].item()],
                [result.xywh[0][2].item(), result.xywh[0][3].item()],
            ]
        )
        scores = np.array(
            [result.cls.item(), result.conf.item()]
        )
        label=int(result.cls.item())
        norfair_detections.append(
            Detection(
                points=bbox, scores=scores, label=label
            )
        )
    return norfair_detections


def main():

    vid = cv2.VideoCapture("./input/4318381-hd_1920_1080_30fps.mp4") 

    model = YOLO("yolov10n.pt")
    depth_model = pipeline(task="depth-estimation", model="LiheYoung/depth-anything-small-hf")

    tracker = Tracker(distance_function="euclidean", distance_threshold=100)

    fps = vid.get(cv2.CAP_PROP_FPS)
    frame_width = int(vid.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(vid.get(cv2.CAP_PROP_FRAME_HEIGHT))

    output_video_path = "out.webm"
    out = cv2.VideoWriter(output_video_path, cv2.VideoWriter_fourcc(*'vp80'), fps, (frame_width, frame_height))


    # tracker = Tracker(distance_function="euclidean", distance_threshold=100)

    while vid.isOpened():        
        # Capture the video frame 
        # by frame 
        ret, frame = vid.read()
        if not ret:
            break 
        
        yolo_detections = model.predict(source=frame, imgsz=image_size, conf=conf_threshold, classes=[0, 72, 26])
        print("🚀 ~ yolo_detections:", yolo_detections[0])
        annotated_frame = yolo_detections[0].plot()

        color_coverted = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)  
        pil_image = Image.fromarray(color_coverted)
        depth = depth_model(pil_image)
        print("🚀 ~ depth:", depth)
        # depth = pipe(image)["depth"]

        depth_cv_image = np.array(depth["depth"].convert('RGB'))
        # Convert RGB to BGR
        depth_cv_image = depth_cv_image[:, :, ::-1].copy()
        for result in yolo_detections[0].boxes:
            label=int(result.cls.item())
            frame = cv2.rectangle(depth_cv_image, (result.xywh[0][0].item(), result.xywh[0][1].item()),
                                   (result.xywh[0][2].item(), result.xywh[0][3].item()), (255, 0, 0) , 2) 
    
        
        detections = convert(yolo_detections)
        print("🚀 ~ detections:", detections)
        
        tracked_objects = tracker.update(detections)
        print("tracked_objects",tracked_objects)
        draw_points(annotated_frame, tracked_objects)

        
        out.write(annotated_frame)

        # Display the resulting frame 
        # cv2.imshow('frame', depth_cv_image) 

        # the 'q' button is set as the 
        # quitting button you may use any 
        # desired button of your choice 
        # if cv2.waitKey(1) & 0xFF == ord('q'): 
        #     break

    # After the loop release the cap object 
    vid.release() 
    # Destroy all the windows 
    cv2.destroyAllWindows() 
    out.release();


if __name__ == "__main__":
    main()
