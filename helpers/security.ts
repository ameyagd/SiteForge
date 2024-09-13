import CryptoJS from "crypto-js";

// NOTE: 
// converts ads data object into an URL.
// below function is just for reference not used in this site;
// function getUrls() {
//   return adsData.map((adData) => {
//     let url = "/topic?";
//     const data = [];
//     for (const key in adData) {
//       data.push(`${key}=${getEncryptedString(`${adData[key]}`)}`);
//     }
//     url += data.join("&");
//     return url;
//   });
// }

export function getDecryptedData(str: string) {
  str = str
    .replace(/xMl3Jkmyr/g, "+")
    .replace(/Por21Ldnit/g, "/")
    .replace(/Ml32uj/g, "=");
  const decryptedData = CryptoJS.AES.decrypt(str, process.env.ENCRYPTION_KEY!, {
    iv: process.env.ENCRYPTION_IV! as any as CryptoJS.lib.WordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decryptedData.toString(CryptoJS.enc.Utf8);
}

export function getEncryptedString(str: string) {
  const encryptedData = CryptoJS.AES.encrypt(str, process.env.ENCRYPTION_KEY!, {
    iv: process.env.ENCRYPTION_IV! as any as CryptoJS.lib.WordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encryptedData
    .toString()
    .replace(/\+/g, "xMl3Jkmyr")
    .replace(/\//g, "Por21Ldnit")
    .replace(/\=/g, "Ml32uj");
}
