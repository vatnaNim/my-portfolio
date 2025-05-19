export const exportToDoc = (elementId: string, filename = 'document') => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
    }
  
    const htmlContent = element.innerHTML;
  
    const css = `
      img { width: 300px; }
      table { border-collapse: collapse; border-spacing: 0; }
      td { padding: 6px; }
    `;
  
    const head = `
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <style>${css}</style>
      </head>
    `;
  
    const meta = `
  Mime-Version: 1.0
  Content-Base: ${location.href}
  Content-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"
  
  --NEXT.ITEM-BOUNDARY
  Content-Type: text/html; charset="utf-8"
  Content-Location: ${location.href}
  
  <!DOCTYPE html>
  <html>${head}<body>${htmlContent}</body></html>
  `;
  
    const options = { maxWidth: 624 };
    const images: {
      type: string;
      encoding: string;
      location: string;
      data: string;
    }[] = [];
  
    const imgElements = element.getElementsByTagName('img');
  
    const processImages = async () => {
      for (let i = 0; i < imgElements.length; i++) {
        const img = imgElements[i];
        await new Promise((resolve) => {
          if (img.complete) {
            resolve(true);
          } else {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
          }
        });
  
        const w = Math.min(img.width, options.maxWidth);
        const h = img.height * (w / img.width);
  
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
  
        const context = canvas.getContext('2d');
        if (context) {
          context.drawImage(img, 0, 0, w, h);
          const uri = canvas.toDataURL('image/png');
  
          img.setAttribute('src', img.src);
          img.width = w;
          img.height = h;
  
          images.push({
            type: uri.substring(uri.indexOf(':') + 1, uri.indexOf(';')),
            encoding: uri.substring(uri.indexOf(';') + 1, uri.indexOf(',')),
            location: img.src,
            data: uri.substring(uri.indexOf(',') + 1),
          });
        }
      }
  
      let imgMetaData = '';
      images.forEach((img) => {
        imgMetaData += `--NEXT.ITEM-BOUNDARY
  Content-Location: ${img.location}
  Content-Type: ${img.type}
  Content-Transfer-Encoding: ${img.encoding}
  
  ${img.data}
  
  `;
      });
      imgMetaData += '--NEXT.ITEM-BOUNDARY--';
  
      const output = meta + imgMetaData;
      const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(output);
      const fullFilename = `${filename}.doc`;
  
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
  
      downloadLink.href = url;
      downloadLink.download = fullFilename;
      downloadLink.click();
  
      document.body.removeChild(downloadLink);
    };
  
    processImages();
};
  