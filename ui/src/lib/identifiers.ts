export function fromUrl(url: string) {
  return new URL(url).host.replace(/^www\./, "").replace(/\./g, "_");
}

/*
  From: https://github.com/mstdokumaci/string-hash-64/blob/master/index.js
  Credits: Mustafa Dokumacı
  License: MIT
*/

export function hash(str: string) {
  var i = str.length;
  var hash1 = 5381;
  var hash2 = 52711;

  while (i--) {
    const char = str.charCodeAt(i);
    hash1 = (hash1 * 33) ^ char;
    hash2 = (hash2 * 33) ^ char;
  }

  const num = (hash1 >>> 0) * 4096 + (hash2 >>> 0);
  return new Number(num).toString(36);
}
