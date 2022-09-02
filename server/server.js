const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const { default: axios } = require("axios");
const {PredictionServiceClient} = require('@google-cloud/automl').v1;
const fs = require("fs");

const projectId = 'vehicle-select-service';
const location = 'us-central1';
const modelId = 'ICN2985201557202534400';
const filePath = `C:/Users/GGPC/Desktop/Ai/turner-ai/turners-ai/image_uploads/nissanute.jpg`;
const keyFilename = 'C:/Users/GGPC/Desktop/Ai/turner-ai/turners-ai/vehicle-select-service.json';
const imageUploadPath = `C:/Users/GGPC/Desktop/Ai/turner-ai/turners-ai/image_uploads`;
const corsOrigin = "http://localhost:3000";

app.use(express.static(__dirname + "../.."));
app.use(
  cors({
    origin: [corsOrigin],
    method: ["GET", "POST"],
    credentials: true,
  })
);

async function imagePrediction(imageBytes) {
  // Instantiates a client
  const client = new PredictionServiceClient({ keyFilename });
  
  // Construct request
  // params is additional domain-specific parameters.
  // score_threshold is used to filter the result
  
  const request = {
    name: client.modelPath(projectId, location, modelId),
    payload: {
      image: {
        imageBytes,
      },
    },
  };
  
  const [response] = await client.predict(request);
  return response; // TODO: return result
}

//IMAGE UPLOAD
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/image-upload", upload.single("my-image-file"), async (req, res) => {
    console.log(req.file, req.body, req.file.buffer);
  
  // 1. Classify image and get labels
  const result = await imagePrediction(req.file.buffer);

  // 2. Lookup DB for listings (images) matching the given labels
  for (const annotationPayload of result.payload) {
    console.log(`type of vehicle: ${annotationPayload.displayName}`);
    const carType = annotationPayload.displayName;
  }

  // 3. return results for the browser to display
  console.log("Image upload request recieved");
});




//SERVER RUNNING ON PORT
const PORT = 4000;

app.listen(PORT, process.env.IP, function () {
  console.log("Server is Running");
});
