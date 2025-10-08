// const userId = "faisal123";
// const messagesDiv = document.getElementById("messages");
// const input = document.getElementById("msg");
// const sendBtn = document.getElementById("sendBtn");

// async function sendMessage() {
//   const msg = input.value.trim();
//   if (!msg) return;
//   appendMessage("user", msg);
//   input.value = "";

//   const typing = document.createElement("div");
//   typing.classList.add("msg", "bot");
//   typing.textContent = "Typing...";
//   messagesDiv.appendChild(typing);
//   scrollToBottom();

//   try {
//     const res = await fetch("/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id: userId, msg }),
//     });

//     const data = await res.json();
//     typing.remove();
//     appendMessage("bot", data.reply || "Something went wrong. Try again!");
//   } catch (error) {
//     typing.remove();
//     appendMessage("bot", "⚠️ Error: Unable to reach server");
//   }
// }

// sendBtn.addEventListener("click", sendMessage);
// input.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") sendMessage();
// });

// function appendMessage(role, text) {
//   const div = document.createElement("div");
//   div.classList.add("msg", role);
//   div.textContent = text;
//   messagesDiv.appendChild(div);
//   scrollToBottom();
// }

// function scrollToBottom() {
//   messagesDiv.scrollTop = messagesDiv.scrollHeight;
// }
