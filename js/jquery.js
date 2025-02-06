$(function () {
  // モーダル
  $('#open').on('click', function () {
    $('#close').toggle('hidden');
  });

  // 戻るボタンのアニメーション
  const top = $('#return');
  top.hide();

  // スクロール
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      top.fadeIn(300);
    } else {
      top.fadeOut(300);
    }
  });

  // 戻るボタン
  top.on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 50);
    return false;
  });

  // メニューの画像クリックでモーダル内の画像変更
  $('.menu a').on('click', function () {
    const imgSrc = $(this).children('img').attr('src'); 
    $('.bigImg img').attr('src', imgSrc); // モーダル内の画像を更新
    $('.modal').fadeIn(); // モーダルを表示
    $('body, html').css('overflow-y', 'hidden'); // スクロールを無効化
    return false;
  });

  // モーダルをクリックで閉じる
  $('.modal').on('click', function () {
    $(this).fadeOut(); // モーダルを非表示
    $('body, html').css('overflow-y', 'visible'); // スクロールを有効化
    return false;
  });

  // スクロールによるフェードインアニメーション
  $(window).on('scroll load', function () {
    var scroll = $(this).scrollTop(); // 現在のスクロール位置
    var windowHeight = $(window).height(); // ウィンドウの高さ
    $('.fadeIn').each(function () {
      var cntPos = $(this).offset().top; // 対象要素の上からの位置
      if (scroll > cntPos - windowHeight + windowHeight / 3) {
        // スクロール位置が要素に達したら
        $(this).addClass('active'); // activeクラスを追加してフェードイン効果を適用
      }
    });
  });
});
