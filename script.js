const dhakButton = document.getElementById("dhakButton");
const dhakAudio = document.getElementById("dhakAudio");
const dhakText = document.getElementById("dhakText");

dhakButton.addEventListener("click", async () => {
  if (dhakAudio.paused) {
    try {
      await dhakAudio.play();
      dhakButton.classList.add("active");
      dhakText.textContent = "ঢাক বন্ধ করুন";
    } catch (error) {
      alert("প্রথমে audio ফোল্ডারে তোমার ঢাকের MP3 ফাইলটি dhak.mp3 নামে রাখো।");
    }
  } else {
    dhakAudio.pause();
    dhakAudio.currentTime = 0;
    dhakButton.classList.remove("active");
    dhakText.textContent = "ঢাক চালু করুন";
  }
});

dhakAudio.addEventListener("ended", () => {
  dhakButton.classList.remove("active");
  dhakText.textContent = "ঢাক চালু করুন";
});
