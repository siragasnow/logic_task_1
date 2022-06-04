// ◆課題A
// 合格点が200点満点のテストがあります。

// 180点以上なら「東大クラス」
// 160点以上なら、「早慶併用クラス」
// 140点以上なら、「マーチ併用クラス」
// 120点以上なら、「6割取れました」
// 111点なら、「3桁のゾロ目！」

// 以上の条件下において対応する「文字」を出力する処理を記述してください。

var user_point = prompt('0~200までの数字を入力してください')

// エラー処理
while(user_point > 200){
    alert('0~200までの数字を入力してください。');
    user_point = prompt('0~200までの数字を入力してください');
}

while(user_point == ""){
    alert('空白です。再度0~200までの数字を入力してください。');
    user_point = prompt('0~200までの数字を入力してください');
}

while(!isFinite(user_point)){
    alert('半角英数字で入力してください。');
    user_point = prompt('0~200までの数字を入力してください');
}

// 点数によって表示させる
if(user_point >= 180){
    console.log('東大クラス');
    alert('あなたの点数は' + user_point + '点です。東大クラスの成績です。');
}else if (user_point >= 160){
    console.log('早慶併用クラス');
    alert('あなたの点数は' + user_point + '点です。早慶併用クラスの成績です。');
}else if (user_point >= 140){
    console.log('マーチ併用クラス');
    alert('あなたの点数は' + user_point + '点です。マーチ併用クラスの成績です。');
}else if (user_point >= 120){
    console.log('6割取れました');
}else if (user_point == 111){
    console.log('3桁のゾロ目！');
    alert('あなたの点数は' + user_point + '点です。3桁のゾロ目！');
}else if (user_point == null){
    alert('次回のご利用をお待ちしております。');
}else { 
    console.log('もっと勉強しなさい！');
    alert('あなたの点数は' + user_point + '点です。もっと勉強しなさい！');
}


// 課題B

const data = {
    "kind": "books#volumes",
    "totalItems": 1714,
    "items": [
        {
        "kind": "books#volume",
        "id": "IbKxAAAAIAAJ",
        "etag": "R8m0JwYiKdo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/IbKxAAAAIAAJ",
        "volumeInfo": {
          "title": "決定版夏目漱石",
          "authors": [
            "江藤淳"
          ],
          "publishedDate": "1979",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "UCSD:31822004985784"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 579,
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.1.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=IbKxAAAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=IbKxAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "ja",
          "previewLink": "http://books.google.co.jp/books?id=IbKxAAAAIAAJ&q=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3&dq=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.co.jp/books?id=IbKxAAAAIAAJ&dq=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/%E6%B1%BA%E5%AE%9A%E7%89%88%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3.html?hl=&id=IbKxAAAAIAAJ"
        },
        "saleInfo": {
          "country": "JP",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "JP",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=IbKxAAAAIAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        }
      },
      {
        "kind": "books#volume",
        "id": "7ksKDAAAQBAJ",
        "etag": "lFaR/Gxdwlo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/7ksKDAAAQBAJ",
        "volumeInfo": {
          "title": "夏目漱石、現代を語る　漱石社会評論集",
          "authors": [
            "夏目　漱石"
          ],
          "publisher": "KADOKAWA",
          "publishedDate": "2016-05-10",
          "description": "食い扶持を稼ぐための仕事と、生きるための仕事。国家と個人、異なるアイデンティティへの対応。新しい時代への適応。現代の我々も抱える葛藤と対峙し続けてきた漱石。漱石がぶつかった問題は、いまの私たちが抱える問題である！",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "PKEY:04082078A06191300000"
            }
          ],
          "readingModes": {
            "text": true,
            "image": true
          },
          "printType": "BOOK",
          "categories": [
            "Philosophy"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "1.1.3.0.preview.3",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=7ksKDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=7ksKDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "ja",
          "previewLink": "http://books.google.co.jp/books?id=7ksKDAAAQBAJ&printsec=frontcover&dq=%E5%A4%8F%E7%9B%AE%E6%BC%B1%E7%9F%B3&hl=&cd=2&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=7ksKDAAAQBAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=7ksKDAAAQBAJ"
        },
        "saleInfo": {
          "country": "JP",
          "saleability": "FOR_SALE",
          "isEbook": true,
          "listPrice": {
            "amount": 836,
            "currencyCode": "JPY"
          },
          "retailPrice": {
            "amount": 752,
            "currencyCode": "JPY"
          },
          "buyLink": "https://play.google.com/store/books/details?id=7ksKDAAAQBAJ&rdid=book-7ksKDAAAQBAJ&rdot=1&source=gbs_api",
          "offers": [
            {
              "finskyOfferType": 1,
              "listPrice": {
                "amountInMicros": 836000000,
                "currencyCode": "JPY"
              },
              "retailPrice": {
                "amountInMicros": 752000000,
                "currencyCode": "JPY"
              }
            }
          ]
        },
      },
    ],
  }

//   ◆課題B:配列の問題
//   以下のdataを使って問題を解いてください。
//   ①著者名が「夏目　漱石」の、本のタイトルを抽出してください。
  
console.log(data.items[1].volumeInfo.title);

//   ②htmlのimgタグを使って、本の画像を表示させてください。(繰り返し処理を使って)

const dataItem = data.items
console.log(dataItem)

dataItem.forEach(function(dataImage) {
    // console.log(dataImage.volumeInfo.imageLinks.smallThumbnail);
    const img = dataImage.volumeInfo.imageLinks.smallThumbnail
    console.log(img);
    document.write("<img src='" + img + "'>");
})


// ◆課題C：CSSのクラスをJavaScriptで書き換えよう(DOM操作)

function buttonClick1() {
    target = document.getElementById("box");
    if(target != null) {
        target.className = "addBox";
    }
}

function buttonClick2() {
    target = document.getElementById("box");
    if(target != null) {
        target.classList.remove('addBox');
    }
}
