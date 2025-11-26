export function copyToClipboard(text: string) {navigator.clipboard
  .writeText(text)
  .then(() => console.log('Copied to clipboard'))
  .catch((err) => console.error('Copy failed', err))}
