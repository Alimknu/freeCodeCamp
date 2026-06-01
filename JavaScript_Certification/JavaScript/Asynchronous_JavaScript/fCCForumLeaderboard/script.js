const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(timestamp) {
  const ms = Date.now() - new Date(timestamp);
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);

  if (min < 60) {
    return `${min}m ago`;
  }

  const hour = Math.floor(min / 60);

  if (hour < 24) {
    return `${hour}h ago`;
  }

  return `${Math.floor(hour / 24)}d ago`;
}

function viewCount(views) {
  return views >= 1000 ? Math.floor(views / 1000) + "k" : views;
}

function forumCategory(id) {
  const obj = allCategories[id];

  if (obj) {
    return `<a class="category ${obj.className}" href="${forumCategoryUrl + obj.className + "/" + id}">${obj.category}</a>`;
  }

  return `<a class="category general" href="${forumCategoryUrl + "general/" + id}">General</a>`;
}

function avatars(posters, users) {
  if (!Array.isArray(posters) || !Array.isArray(users)) return "";

  return posters
    .map((p) => {
      const user = users.find((u) => u.id === p.user_id);
      if (!user) return "";
      let src = user.avatar_template || "";
      if (src.startsWith("/")) src = avatarUrl + src;
      src = src.replace("{size}", "30");
      return `<img src="${src}" alt="${user.name}" />`;
    })
    .join("");
}

function showLatestPosts(data) {
  if (!data) return;
  const users = data.users || [];
  const topics = (data.topic_list && data.topic_list.topics) || [];

  const rows = topics
    .map((topic) => {
      const title = `<a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>`;
      const category = forumCategory(topic.category_id);
      const avatarsHtml = `<div class="avatar-container">${avatars(topic.posters, users)}</div>`;
      const replies = (topic.posts_count || 0) - 1;
      const views = viewCount(topic.views || 0);
      const time = timeAgo(topic.bumped_at);

      return `<tr><td>${title} ${category}</td><td>${avatarsHtml}</td><td>${replies}</td><td>${views}</td><td>${time}</td></tr>`;
    })
    .join("");

  const container = document.querySelector("#posts-container");
  if (container) container.innerHTML = rows;
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}
