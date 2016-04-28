$(document).ready(function(){
  function Song(title, file){
    this.title = title;
    this.file = file;
  }

  function Jukebox() {
    this.playlist = 0;
    this.songs = [];

    this.addSong = function(song) {
      this.songs.push(song);
    }

    this.play = function() {
      $("#audio").get(0).play();
    }

    this.pause = function(){
      $("#audio").get(0).pause()
    } 

    this.next = function() {
      this.playlist++;
    }

    this.previous = function() {
      this.playlist--;
    }

    this.display = function() {
      $(".display").html(audio.songs(audio.playlist)).title;
    }

    Song.apply(this, arguments);
  }

track1 = new Song("Battlecry Nujabes Feat.shing02 - Samurai Champloo OST", "music/track1.mp3");
track2 = new Song("The Space Between Two World - Samurai Champloo OST", "music/track2.mp3");
track3 = new Song("Aruarian Dance - Samurai Champloo OST", "music/track3.mp3");

 var audio = new Jukebox()
 audio.addSong(track1)
 audio.addSong(track2)
 audio.addSong(track3)

  $("#play").on("click", function() {
    $("#audio").attr("src", audio.songs[0].file)
    audio.play()
  })

  $("#pause").on("click", function() {
    audio.pause()
    })

  $("#next").on("click", function(){
    audio.next()
    $("#audio").attr("src", audio.songs[audio.playlist].file)
    audio.play()
    })

  $("#previous").on("click", function(){
    audio.previous()
    $("#audio").attr("src", audio.songs[audio.playlist].file)
    audio.play()
  })

  $("#display").text(audio.songs[audio.playlist].title);
});




