import { Body, Injectable } from '@nestjs/common';
import S3 from 'aws-sdk/clients/s3';
import { debug } from 'console';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET, 
});

@Injectable()
export class FileUploaderService {
  public async uploadFile(name: string, file: any):Promise<string> {
    // const fileKey: string = customer.toLowerCase().trim() + file;
    // const fileTags: string = JSON.parse(tags);
    const bucket = process.env.AWS_S3_BUCKET_FRONT_DOOR;
    const fileKey: string = `filepath/${file.name}`;
    const fileParams = {
      Body: file.buffer,
      Bucket: bucket,
      Key: fileKey,
      Tagging: "TagSet=[{Key='Type', Value='MedicalExam'}, {Key='Analyzed', Value='No'}]"
    }

    console.log(fileParams.Bucket)
    console.log(fileParams.Key)
    console.log(JSON.parse(fileParams.Tagging))
    return 
    // const payload = await s3.putObject(fileParams)
    //   .promise()
    //   .then(fileCreated => {
    //     console.log("fileCreated", JSON.stringify(fileCreated))
    //     return JSON.stringify(fileCreated)
    //   })
    //   .catch(err => {
    //     throw new Error(err)
    //   })
    // return payload;
  }
}
