export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const succes = true;

    if (succes) {
      resolve('true');
    } else {
      reject(new Error('false'));
    }
  });
}
