// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');


const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userElem = document.querySelector('.user');
let userNameElem = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');

const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhoto = document.querySelector('.edit-photo');

const userAvatarElem = document.querySelector('.user-avatar');

const postsWrapper = document.querySelector('.posts');

const listUsers = [
  {
    email: 'maks@mail.com',
    password: '1234',
    displayName: 'MaksJS'
  },
  {
    email: 'kate@mail.com',
    password: '1234',
    displayName: 'KateJS'
  }
];


const setUsers = {
  user: null,
  logIn(email, password, handler) {
    /*if (!regExpValidEmail.test(email)) {
      alert('Email не валиден');
      return;
    }*/

    const user = this.getUser(email);
    if  (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден');
    }
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, handler) {
    /*if (!regExpValidEmail.test(email)) {
      alert('Email не валиден');
      return;
    }   */

    if (!email.trim() || !password.trim()) {
      alert('Введите данные');
      return;
    }
    if (!this.getUser(email)) {
      const user = {email, password, displayName: email.split('@')[0]};
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с таким email уже зарегестрирован');
    }
  },
  editUser(login, userPhoto, handler) {
    if (login) {
      this.user.displayName = login;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
  },
  getUser(email) {
    return listUsers.find(item => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  }
};


const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста1',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
      author: 'maks@mail.com',
      date: '11.11.2020, 17:52:00',
      like: 45,
      comments: 12,
    },
    {
      title: 'Заголовок поста2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'горячее', 'мое'],
      author: 'kate@mail.com',
      date: '12.11.2020, 18:00:00',
      like: 50,
      comments: 20,
    },
    {
      title: 'Заголовок поста3',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['новое', 'горячее', 'мое'],
      author: 'kate@mail.com',
      date: '13.11.2020, 18:00:00',
      like: 50,
      comments: 20,
    }
  ]
};


const showAllPosts = () => {

  let postsHTML = '';

  setPosts.allPosts.forEach(post => {

    const {title, text, tags, author, date, like, comments} = post;

      postsHTML += `
              <section class="post">
          <div class="post-body">
              <h2 class="post-title">${post.title}</h2>
              <p class="post-text">${post.text}</p>
              <div class="tags">    
              ${post.tags.map((tag) => `<a href="#" class="tag">#${tag}</a>`).join('')}                    
              </div>
          </div>
          <div class="post-footer">
              <div class="post-buttons">
                  <button class="post-button likes">
                      <svg width="19" height="20" class="icon icon-like">
                          <use xlink:href="img/icons.svg#like"></use>
                      </svg>
                      <span class="likes-counter">${post.like}</span>
                  </button>
                  <button class="post-button comments">
                      <svg width="21" height="21" class="icon icon-comment">
                          <use xlink:href="img/icons.svg#comment"></use>
                      </svg>
                      <span class="comments-counter">${post.comments}</span>
                  </button>
                  <button class="post-button save">
                      <svg width="19" height="19" class="icon icon-save">
                          <use xlink:href="img/icons.svg#save"></use>
                      </svg>
                  </button>
                  <button class="post-button share">
                      <svg width="17" height="19" class="icon icon-share">
                          <use xlink:href="img/icons.svg#share"></use>
                      </svg>
                  </button>
              </div>
              <div class="post-author">
                  <div class="author-about">
                      <a href="#" class="author-username">${post.author}</a>
                      <span class="post-time">${post.date}</span>
                  </div>
                  <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
              </div>
          </div>
      </section>
      `;
  });

  postsWrapper.innerHTML = postsHTML;

};


const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};



const init = () => {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
  
    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });
  
  loginSignup.addEventListener('click', event => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
  
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });
  
  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });
  
  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });
  
  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhoto.value, toggleAuthDom);
    editContainer.classList.remove('visible');
  });

  // отслеживаем клик по кнопке меню и запускаем функцию 
  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  });

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
