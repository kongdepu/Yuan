const musicData =
[
  {
    "text": "网易云音乐", "children":
      [
        { "id": 1, "text": "网易云收藏", "url": "?type=playlist&id=7594375387" },
        { "id": 2, "text": "DJ中文版", "url": "?type=playlist&id=2542416403" }
      ]
  },
  {
    "text": "QQ音乐", "children":
      [
        { "id": 3, "text": "QQ音乐收藏", "url": "?type=playlist&server=tencent&id=1306295033" }
      ]
  },
];
var themeColor = getThemeColor();
var player;
// 初始化
function init() {
  player = new APlayer({
    element: document.getElementById('aplayer'),
    lrcType: 3,
    theme: themeColor,
    order: 'list',
    audio: []
  });
  $.get("https://api.injahow.cn/meting/?type=playlist", { id: '7594375387' }, ((res) => {
    player.list.add(lyricsFormatting(res));
  }));
}
init();
// 歌词格式化
function lyricsFormatting(data) {
  return data.map((e) => {
    return {
      name: e.name,
      artist: e.artist,
      url: e.url,
      cover: e.pic,
      lrc: e.lrc,
      // theme: themeColor,
    };
  });
}
// 切换播放列表
function switchPlayer(data) {
  // 暂停播放音频
  player.pause()
  player = new APlayer({
    element: document.getElementById('aplayer'),
    lrcType: 3,
    theme: themeColor,
    order: 'list',
    audio: lyricsFormatting(data)
  });
}