const codeText = document.getElementById("codeText")!;
const processedText = codeText.innerText
    .split('\n')
    .filter(line => line.trim() !== '')  // 空行を除去
    .map(line => line.trim())  // インデントを除去
    .join('<br>');  // 改行を追加

codeText.innerHTML = processedText;