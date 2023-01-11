const images = [
  {
    time: "nightImage",
    url: "https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    time: "midnightImage",
    url: "https://images.pexels.com/photos/746111/pexels-photo-746111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    time: "dawnImage",
    url: "https://images.pexels.com/photos/3839336/pexels-photo-3839336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    time: "morningImage",
    url: "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    time: "afternoonImage",
    url: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    time: "daskImage",
    url: "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

let twelveHourFormat = true;

const UIhours = document.querySelector(".row-hours");
const UImins = document.querySelector(".row-mins");
const UIsecs = document.querySelector(".row-secs");
const UItimeFormat = document.querySelector(".row-time-format");
const UIbgImg = document.querySelector(".bgImg");
const UIchangeFormat = document.querySelector(".format-settings");
const UIfullDate = document.querySelector(".full-date");

const getFullTime = (datetime) => {
  const fullTime = new Intl.DateTimeFormat("en-IN", {
    hour12: twelveHourFormat,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(datetime);
  return fullTime;
};

const setTimeUI = (t) => {
  const fullTime = t.split(" ");
  const time = fullTime[0];
  const timeFormat = fullTime[1];

  const splittedTime = time.split(":");

  UIhours.textContent = splittedTime[0];
  UImins.textContent = splittedTime[1];
  UIsecs.textContent = splittedTime[2];

  if (twelveHourFormat) {
    UItimeFormat.className = "row-time-format twelve";
    UItimeFormat.textContent = timeFormat;
  }
  if (!twelveHourFormat) {
    UItimeFormat.className = "row-time-format twenty-four";
    UItimeFormat.textContent = "24-hour";
  }

  return splittedTime[0];
};

const getImageTime = (hour) => {
  let timeImage = "";

  if (hour <= 1) timeImage = "midnightImage";
  if (hour >= 5) timeImage = "dawnImage";
  if (hour >= 7) timeImage = "morningImage";
  if (hour >= 12) timeImage = "afternoonImage";
  if (hour >= 17) timeImage = "daskImage";
  if (hour >= 19) timeImage = "nightImage";
  if (hour >= 23) timeImage = "midnightImage";
  if (hour > 1 && hour < 5) timeImage = "nightImage";

  const img = images.find((img) => img.time === timeImage);
  UIbgImg.src = img.url;
};

const main = () => {
  const dateTime = new Date();
  const time = getFullTime(dateTime);
  setTimeUI(time);
  getImageTime(dateTime.getHours());
  UIfullDate.textContent =
    dateTime.toLocaleDateString("en-IN", {
      weekday: "long",
    }) +
    ", " +
    dateTime.getDate() +
    " " +
    dateTime.toLocaleDateString("en-IN", {
      month: "long",
    }) +
    " " +
    dateTime.getFullYear();
};

main();

setInterval(() => {
  main();
}, 1000);

UIchangeFormat.addEventListener("click", () => {
  twelveHourFormat = !twelveHourFormat;
});
