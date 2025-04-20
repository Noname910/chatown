// Enhanced Chat Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements - Auth
    const authContainer = document.getElementById('auth-container');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    // DOM Elements - Main Navigation
    const mainContainer = document.getElementById('main-container');
    const homeBtn = document.getElementById('home-btn');
    const exploreBtn = document.getElementById('explore-btn');
    const messagesBtn = document.getElementById('messages-btn');
    const notificationsBtn = document.getElementById('notifications-btn');
    const profileBtn = document.getElementById('profile-btn');
    const createRoomBtn = document.getElementById('create-room-btn');
    const mainLogoutBtn = document.getElementById('main-logout-btn');
    
    // DOM Elements - Sections
    const homeSection = document.getElementById('home-section');
    const exploreSection = document.getElementById('explore-section');
    const messagesSection = document.getElementById('messages-section');
    const notificationsSection = document.getElementById('notifications-section');
    const profileSection = document.getElementById('profile-section');
    
    // DOM Elements - Home
    const recentRoomsContainer = document.getElementById('recent-rooms-container');
    const globalRoomCount = document.getElementById('global-room-count');
    
    // DOM Elements - Explore
    const exploreSearch = document.getElementById('explore-search');
    const searchBtn = document.getElementById('search-btn');
    const exploreTabs = document.querySelectorAll('.explore-tab');
    const exploreRooms = document.getElementById('explore-rooms');
    const exploreUsers = document.getElementById('explore-users');
    
    // DOM Elements - Messages
    const messagesTabs = document.querySelectorAll('.messages-tab');
    const chatsList = document.getElementById('chats-list');
    const roomsList = document.getElementById('rooms-list');
    const newMessageBtn = document.getElementById('new-message-btn');
    
    // DOM Elements - Profile
    const profileUsername = document.getElementById('profile-username');
    const profileFullname = document.getElementById('profile-fullname');
    const profileBio = document.getElementById('profile-bio');
    const profileAvatarImg = document.getElementById('profile-avatar-img');
    const followingCount = document.getElementById('following-count');
    const followersCount = document.getElementById('followers-count');
    const roomsCount = document.getElementById('rooms-count');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editAvatarBtn = document.getElementById('edit-avatar-btn');
    const editCoverBtn = document.getElementById('edit-cover-btn');
    const profileTabs = document.querySelectorAll('.profile-tab');
    const profileRooms = document.getElementById('profile-rooms');
    const profileFollowing = document.getElementById('profile-following');
    const profileFollowers = document.getElementById('profile-followers');
    
    // DOM Elements - User Profile View
    const userProfileView = document.getElementById('user-profile-view');
    const userProfileBackBtn = document.getElementById('user-profile-back-btn');
    const userAvatarImg = document.getElementById('user-avatar-img');
    const userProfileUsername = document.getElementById('user-profile-username');
    const userProfileFullname = document.getElementById('user-profile-fullname');
    const userProfileBio = document.getElementById('user-profile-bio');
    const userFollowingCount = document.getElementById('user-following-count');
    const userFollowersCount = document.getElementById('user-followers-count');
    const userRoomsCount = document.getElementById('user-rooms-count');
    const followUserBtn = document.getElementById('follow-user-btn');
    const messageUserBtn = document.getElementById('message-user-btn');
    const userProfileRooms = document.getElementById('user-profile-rooms');
    
    // DOM Elements - Chat
    const chatContainer = document.getElementById('chat-container');
    const backBtn = document.getElementById('back-btn');
    const currentRoomName = document.getElementById('current-room-name');
    const roomMembersCount = document.getElementById('room-members-count');
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const typingIndicator = document.getElementById('typing-indicator');
    const roomInfoBtn = document.getElementById('room-info-btn');
    const attachmentBtn = document.getElementById('attachment-btn');
    const fileMenu = document.getElementById('file-menu');
    const uploadImageBtn = document.getElementById('upload-image-btn');
    const uploadFileBtn = document.getElementById('upload-file-btn');
    const fileInput = document.getElementById('file-input');
    
    // DOM Elements - Direct Chat
    const directChatContainer = document.getElementById('direct-chat-container');
    const directBackBtn = document.getElementById('direct-back-btn');
    const chatUserAvatar = document.getElementById('chat-user-avatar');
    const chatUserName = document.getElementById('chat-user-name');
    const chatUserStatus = document.getElementById('chat-user-status');
    const directChatMessages = document.getElementById('direct-chat-messages');
    const directMessageInput = document.getElementById('direct-message-input');
    const directSendBtn = document.getElementById('direct-send-btn');
    const directTypingIndicator = document.getElementById('direct-typing-indicator');
    const viewProfileBtn = document.getElementById('view-profile-btn');
    const directAttachmentBtn = document.getElementById('direct-attachment-btn');
    const directFileMenu = document.getElementById('direct-file-menu');
    const directUploadImageBtn = document.getElementById('direct-upload-image-btn');
    const directUploadFileBtn = document.getElementById('direct-upload-file-btn');
    const directFileInput = document.getElementById('direct-file-input');
    
    // DOM Elements - Reply
    const replyContainer = document.getElementById('reply-container');
    const replyText = document.getElementById('reply-text');
    const cancelReplyBtn = document.getElementById('cancel-reply-btn');
    const directReplyContainer = document.getElementById('direct-reply-container');
    const directReplyText = document.getElementById('direct-reply-text');
    const directCancelReplyBtn = document.getElementById('direct-cancel-reply-btn');
    
    // DOM Elements - Emoji
    const emojiBtn = document.getElementById('emoji-btn');
    const emojiPicker = document.getElementById('emoji-picker');
    const emojiList = document.getElementById('emoji-list');
    const emojiCategories = document.querySelectorAll('.emoji-category');
    const directEmojiBtn = document.getElementById('direct-emoji-btn');
    
    // DOM Elements - Modals
    const createRoomModal = document.getElementById('create-room-modal');
    const createRoomForm = document.getElementById('create-room-form');
    const roomTypeSelect = document.getElementById('room-type');
    const roomPasswordGroup = document.getElementById('room-password-group');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const editProfileForm = document.getElementById('edit-profile-form');
    const newMessageModal = document.getElementById('new-message-modal');
    const userSearch = document.getElementById('user-search');
    const messageUsersList = document.getElementById('message-users-list');
    const joinPrivateRoomModal = document.getElementById('join-private-room-modal');
    const joinPrivateRoomForm = document.getElementById('join-private-room-form');
    const privateRoomName = document.getElementById('private-room-name');
    const privateRoomPassword = document.getElementById('private-room-password');
    const roomInfoModal = document.getElementById('room-info-modal');
    const modalRoomName = document.getElementById('modal-room-name');
    const modalRoomDescription = document.getElementById('modal-room-description');
    const roomTypeBadge = document.getElementById('room-type-badge');
    const roomMembersList = document.getElementById('room-members-list');
    const closeModalBtns = document.querySelectorAll('.close-modal-btn');
    const imagePreviewModal = document.getElementById('image-preview-modal');
    const previewImage = document.getElementById('preview-image');
    const closePreviewBtn = document.querySelector('.close-preview-btn');
    const overlay = document.getElementById('overlay');
    
    // Templates
    const messageTemplate = document.getElementById('message-template');
    const roomCardTemplate = document.getElementById('room-card-template');
    const userCardTemplate = document.getElementById('user-card-template');
    const chatListItemTemplate = document.getElementById('chat-list-item-template');
    const notificationItemTemplate = document.getElementById('notification-item-template');
    
    // App State
    const state = {
        currentUser: null,
        currentUserData: null,
        currentRoom: null,
        currentChat: null,
        users: [], // Simulated users database
        rooms: {
            'global': {
                id: 'global',
                name: 'Global Room',
                description: 'Chat with everyone in the global community',
                type: 'public',
                password: null,
                creator: 'system',
                members: [],
                messages: []
            }
        },
        chats: {}, // Direct chats between users
        recentRooms: ['global'],
        replyingTo: null,
        directReplyingTo: null,
        typingTimeout: null,
        directTypingTimeout: null,
        notifications: [],
        viewingUser: null
    };
    
    // Initialize Emoji Picker
    function initEmojiPicker() {
        const emojis = {
            smileys: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳'],
            people: ['👋', '🤚', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🙏'],
            animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🙈', '🙉', '🙊', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇'],
            food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🌮', '🍕', '🍔', '🍟', '🍖', '🍗', '🥩', '🍱'],
            travel: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🛵', '🏍️', '🛺', '🚲', '🛴', '🚨', '🚥', '🚦', '🛑', '✈️', '🛫', '🛬', '🛩️'],
            activities: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽'],
            objects: ['💡', '🔦', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🔩', '⚙️', '🗜️', '⚗️', '🧪', '🧫', '🧬', '🔬'],
            symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎']
        };
        
        // Load default emoji category
        loadEmojis('smileys');
        
        // Add event listeners to emoji categories
        emojiCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remove active class from all categories
                emojiCategories.forEach(cat => cat.classList.remove('active'));
                // Add active class to clicked category
                this.classList.add('active');
                // Load emojis for the selected category
                loadEmojis(this.dataset.category);
            });
        });
        
        function loadEmojis(category) {
            emojiList.innerHTML = '';
            emojis[category].forEach(emoji => {
                const emojiElement = document.createElement('div');
                emojiElement.classList.add('emoji');
                emojiElement.textContent = emoji;
                emojiElement.addEventListener('click', function() {
                    // Add emoji to active input
                    if (directChatContainer.classList.contains('hidden')) {
                        messageInput.value += emoji;
                        messageInput.focus();
                    } else {
                        directMessageInput.value += emoji;
                        directMessageInput.focus();
                    }
                    emojiPicker.classList.add('hidden');
                    overlay.classList.add('hidden');
                });
                emojiList.appendChild(emojiElement);
            });
        }
    }
    
    // Initialize the app
    function init() {
        // Add some demo users
        state.users.push({
            username: 'john_doe',
            password: 'password123',
            fullname: 'John Doe',
            bio: 'Software developer and tech enthusiast',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            following: [],
            followers: [],
            rooms: []
        });
        
        state.users.push({
            username: 'jane_smith',
            password: 'password123',
            fullname: 'Jane Smith',
            bio: 'Digital artist and photographer',
            avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
            following: [],
            followers: [],
            rooms: []
        });
        
        state.users.push({
            username: 'alex_wilson',
            password: 'password123',
            fullname: 'Alex Wilson',
            bio: 'Travel blogger and adventure seeker',
            avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
            following: [],
            followers: [],
            rooms: []
        });
        
        // Add some demo rooms
        state.rooms['tech_talk'] = {
            id: 'tech_talk',
            name: 'Tech Talk',
            description: 'Discuss the latest in technology and gadgets',
            type: 'public',
            password: null,
            creator: 'john_doe',
            members: ['john_doe', 'jane_smith'],
            messages: []
        };
        
        state.rooms['design_corner'] = {
            id: 'design_corner',
            name: 'Design Corner',
            description: 'Share design ideas and get feedback',
            type: 'public',
            password: null,
            creator: 'jane_smith',
            members: ['jane_smith', 'alex_wilson'],
            messages: []
        };
        
        state.rooms['travel_buddies'] = {
            id: 'travel_buddies',
            name: 'Travel Buddies',
            description: 'Connect with fellow travelers and share experiences',
            type: 'public',
            password: null,
            creator: 'alex_wilson',
            members: ['alex_wilson', 'john_doe'],
            messages: []
        };
        
        state.rooms['private_club'] = {
            id: 'private_club',
            name: 'Private Club',
            description: 'Exclusive discussions for members only',
            type: 'private',
            password: 'secret123',
            creator: 'john_doe',
            members: ['john_doe'],
            messages: []
        };
        
        // Update user rooms
        state.users.find(u => u.username === 'john_doe').rooms = ['tech_talk', 'travel_buddies', 'private_club'];
        state.users.find(u => u.username === 'jane_smith').rooms = ['tech_talk', 'design_corner'];
        state.users.find(u => u.username === 'alex_wilson').rooms = ['design_corner', 'travel_buddies'];
        
        // Initialize emoji picker
        initEmojiPicker();
        
        // Check if user is logged in (from localStorage)
        const savedUser = localStorage.getItem('instChatUser');
        if (savedUser) {
            state.currentUser = savedUser;
            state.currentUserData = state.users.find(u => u.username === savedUser);
            showMainContainer();
            loadHomeSection();
        }
        
        // Set up event listeners
        setupEventListeners();
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Auth event listeners
        loginTab.addEventListener('click', function() {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        });
        
        signupTab.addEventListener('click', function() {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value;
            
            // Simple validation
            if (!username || !password) {
                alert('Please enter both username and password');
                return;
            }
            
            // Check if user exists (in a real app, this would be a server request)
            const user = state.users.find(u => u.username === username && u.password === password);
            if (user) {
                state.currentUser = username;
                state.currentUserData = user;
                localStorage.setItem('instChatUser', username);
                showMainContainer();
                loadHomeSection();
            } else {
                // Check if username exists but password is wrong
                const userExists = state.users.find(u => u.username === username);
                if (userExists) {
                    alert('Incorrect password');
                } else {
                    alert('User not found. Please sign up.');
                }
            }
        });
        
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value.trim();
            const fullname = document.getElementById('signup-fullname').value.trim();
            const bio = document.getElementById('signup-bio').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            
            // Simple validation
            if (!username || !fullname || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Check if username already exists
            const userExists = state.users.find(u => u.username === username);
            if (userExists) {
                alert('Username already taken');
                return;
            }
            
            // Add new user (in a real app, this would be a server request)
            const newUser = {
                username,
                password,
                fullname,
                bio: bio || 'No bio yet',
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(fullname)}&background=random`,
                following: [],
                followers: [],
                rooms: []
            };
            
            state.users.push(newUser);
            state.currentUser = username;
            state.currentUserData = newUser;
            localStorage.setItem('instChatUser', username);
            showMainContainer();
            loadHomeSection();
        });
        
        // Main navigation event listeners
        homeBtn.addEventListener('click', function() {
            setActiveNavButton(homeBtn);
            showSection(homeSection);
            loadHomeSection();
        });
        
        exploreBtn.addEventListener('click', function() {
            setActiveNavButton(exploreBtn);
            showSection(exploreSection);
            loadExploreSection();
        });
        
        messagesBtn.addEventListener('click', function() {
            setActiveNavButton(messagesBtn);
            showSection(messagesSection);
            loadMessagesSection();
        });
        
        notificationsBtn.addEventListener('click', function() {
            setActiveNavButton(notificationsBtn);
            showSection(notificationsSection);
            loadNotificationsSection();
        });
        
        profileBtn.addEventListener('click', function() {
            setActiveNavButton(profileBtn);
            showSection(profileSection);
            loadProfileSection();
        });
        
        mainLogoutBtn.addEventListener('click', function() {
            state.currentUser = null;
            state.currentUserData = null;
            localStorage.removeItem('instChatUser');
            showAuthContainer();
        });
        
        createRoomBtn.addEventListener('click', function() {
            showModal(createRoomModal);
        });
        
        // Room type select event listener
        roomTypeSelect.addEventListener('change', function() {
            if (this.value === 'private') {
                roomPasswordGroup.classList.remove('hidden');
            } else {
                roomPasswordGroup.classList.add('hidden');
            }
        });
        
        // Create room form event listener
        createRoomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const roomName = document.getElementById('room-name').value.trim();
            const roomDescription = document.getElementById('room-description').value.trim();
            const roomType = roomTypeSelect.value;
            const roomPassword = document.getElementById('room-password').value;
            
            // Simple validation
            if (!roomName) {
                alert('Please enter a room name');
                return;
            }
            
            if (roomType === 'private' && !roomPassword) {
                alert('Please enter a password for the private room');
                return;
            }
            
            // Create room ID from name (lowercase, replace spaces with underscores)
            const roomId = roomName.toLowerCase().replace(/\s+/g, '_');
            
            // Check if room already exists
            if (state.rooms[roomId]) {
                alert('A room with this name already exists');
                return;
            }
            
            // Create new room
            state.rooms[roomId] = {
                id: roomId,
                name: roomName,
                description: roomDescription || 'No description provided',
                type: roomType,
                password: roomType === 'private' ? roomPassword : null,
                creator: state.currentUser,
                members: [state.currentUser],
                messages: []
            };
            
            // Add room to user's rooms
            state.currentUserData.rooms.push(roomId);
            
            // Add system message for room creation
            addSystemMessage(roomId, `${state.currentUser} created this room`);
            
            // Close modal and refresh home section
            hideModal(createRoomModal);
            loadHomeSection();
            
            // Join the newly created room
            joinRoom(roomId);
        });
        
        // Edit profile form event listener
        editProfileBtn.addEventListener('click', function() {
            // Populate form with current user data
            document.getElementById('edit-username').value = state.currentUserData.username;
            document.getElementById('edit-fullname').value = state.currentUserData.fullname;
            document.getElementById('edit-bio').value = state.currentUserData.bio;
            
            showModal(editProfileModal);
        });
        
        editProfileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('edit-username').value.trim();
            const fullname = document.getElementById('edit-fullname').value.trim();
            const bio = document.getElementById('edit-bio').value.trim();
            
            // Simple validation
            if (!username || !fullname) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Check if username is changed and already exists
            if (username !== state.currentUserData.username) {
                const userExists = state.users.find(u => u.username === username);
                if (userExists) {
                    alert('Username already taken');
                    return;
                }
                
                // Update username in localStorage
                localStorage.setItem('instChatUser', username);
                state.currentUser = username;
            }
            
            // Update user data
            state.currentUserData.username = username;
            state.currentUserData.fullname = fullname;
            state.currentUserData.bio = bio || 'No bio yet';
            
            // Close modal and refresh profile section
            hideModal(editProfileModal);
            loadProfileSection();
        });
        
        // New message button event listener
        newMessageBtn.addEventListener('click', function() {
            // Populate users list
            messageUsersList.innerHTML = '';
            state.users.forEach(user => {
                if (user.username !== state.currentUser) {
                    const userItem = document.createElement('div');
                    userItem.classList.add('users-list-item');
                    userItem.innerHTML = `
                        <div class="users-list-avatar">
                            <img src="${user.avatar}" alt="${user.username}">
                        </div>
                        <div class="users-list-info">
                            <div class="users-list-username">${user.username}</div>
                            <div class="users-list-fullname">${user.fullname}</div>
                        </div>
                    `;
                    userItem.addEventListener('click', function() {
                        startDirectChat(user.username);
                        hideModal(newMessageModal);
                    });
                    messageUsersList.appendChild(userItem);
                }
            });
            
            showModal(newMessageModal);
        });
        
        // User search event listener
        userSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const userItems = messageUsersList.querySelectorAll('.users-list-item');
            
            userItems.forEach(item => {
                const username = item.querySelector('.users-list-username').textContent.toLowerCase();
                const fullname = item.querySelector('.users-list-fullname').textContent.toLowerCase();
                
                if (username.includes(searchTerm) || fullname.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        
        // Join private room form event listener
        joinPrivateRoomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const roomId = this.dataset.roomId;
            const password = privateRoomPassword.value;
            
            // Check if password is correct
            if (password === state.rooms[roomId].password) {
                // Add user to room members
                if (!state.rooms[roomId].members.includes(state.currentUser)) {
                    state.rooms[roomId].members.push(state.currentUser);
                }
                
                // Add room to user's recent rooms
                addToRecentRooms(roomId);
                
                // Hide modal and join room
                hideModal(joinPrivateRoomModal);
                joinRoom(roomId);
                
                // Add system message for user joining
                addSystemMessage(roomId, `${state.currentUser} joined the room`);
            } else {
                alert('Incorrect password');
            }
        });
        
        // Room info button event listener
        roomInfoBtn.addEventListener('click', function() {
            showRoomInfo();
        });
        
        // Back button event listeners
        backBtn.addEventListener('click', function() {
            chatContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            state.currentRoom = null;
            state.replyingTo = null;
            replyContainer.classList.add('hidden');
        });
        
        directBackBtn.addEventListener('click', function() {
            directChatContainer.classList.add('hidden');
            mainContainer.classList.remove('hidden');
            state.currentChat = null;
            state.directReplyingTo = null;
            directReplyContainer.classList.add('hidden');
        });
        
        userProfileBackBtn.addEventListener('click', function() {
            userProfileView.classList.add('hidden');
            if (directChatContainer.classList.contains('hidden')) {
                mainContainer.classList.remove('hidden');
            } else {
                directChatContainer.classList.remove('hidden');
            }
            state.viewingUser = null;
        });
        
        // View profile button event listener
        viewProfileBtn.addEventListener('click', function() {
            const username = state.currentChat;
            viewUserProfile(username);
        });
        
        // Message input event listeners
        messageInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            } else {
                // Show typing indicator to other users (simulated)
                showTypingIndicator();
            }
        });
        
        directMessageInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                sendDirectMessage();
            } else {
                // Show typing indicator to other user (simulated)
                showDirectTypingIndicator();
            }
        });
        
        // Send button event listeners
        sendBtn.addEventListener('click', sendMessage);
        directSendBtn.addEventListener('click', sendDirectMessage);
        
        // Reply button event listeners
        cancelReplyBtn.addEventListener('click', function() {
            state.replyingTo = null;
            replyContainer.classList.add('hidden');
        });
        
        directCancelReplyBtn.addEventListener('click', function() {
            state.directReplyingTo = null;
            directReplyContainer.classList.add('hidden');
        });
        
        // Emoji button event listeners
        emojiBtn.addEventListener('click', function() {
            emojiPicker.style.bottom = '80px';
            emojiPicker.style.left = '50px';
            emojiPicker.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
        
        directEmojiBtn.addEventListener('click', function() {
            emojiPicker.style.bottom = '80px';
            emojiPicker.style.left = '50px';
            emojiPicker.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });
        
        // Attachment button event listeners
        attachmentBtn.addEventListener('click', function() {
            fileMenu.classList.toggle('hidden');
        });
        
        directAttachmentBtn.addEventListener('click', function() {
            directFileMenu.classList.toggle('hidden');
        });
        
        // Upload buttons event listeners
        uploadImageBtn.addEventListener('click', function() {
            fileInput.setAttribute('accept', 'image/*');
            fileInput.click();
        });
        
        uploadFileBtn.addEventListener('click', function() {
            fileInput.setAttribute('accept', '.pdf,.doc,.docx,.txt');
            fileInput.click();
        });
        
        directUploadImageBtn.addEventListener('click', function() {
            directFileInput.setAttribute('accept', 'image/*');
            directFileInput.click();
        });
        
        directUploadFileBtn.addEventListener('click', function() {
            directFileInput.setAttribute('accept', '.pdf,.doc,.docx,.txt');
            directFileInput.click();
        });
        
        // File input event listeners
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                handleFileUpload(file);
                fileMenu.classList.add('hidden');
            }
        });
        
        directFileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                handleDirectFileUpload(file);
                directFileMenu.classList.add('hidden');
            }
        });
        
        // Close modal buttons event listeners
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal');
                hideModal(modal);
            });
        });
        
        // Close preview button event listener
        closePreviewBtn.addEventListener('click', function() {
            imagePreviewModal.classList.add('hidden');
        });
        
        // Overlay event listener
        overlay.addEventListener('click', function() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.add('hidden');
            });
            emojiPicker.classList.add('hidden');
            overlay.classList.add('hidden');
        });
        
        // Explore tabs event listeners
        exploreTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                exploreTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabName = this.dataset.tab;
                if (tabName === 'rooms') {
                    exploreRooms.classList.remove('hidden');
                    exploreUsers.classList.add('hidden');
                } else {
                    exploreRooms.classList.add('hidden');
                    exploreUsers.classList.remove('hidden');
                }
            });
        });
        
        // Messages tabs event listeners
        messagesTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                messagesTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabName = this.dataset.tab;
                if (tabName === 'chats') {
                    chatsList.classList.remove('hidden');
                    roomsList.classList.add('hidden');
                } else {
                    chatsList.classList.add('hidden');
                    roomsList.classList.remove('hidden');
                }
            });
        });
        
        // Profile tabs event listeners
        profileTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                profileTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabName = this.dataset.tab;
                if (tabName === 'rooms') {
                    profileRooms.classList.remove('hidden');
                    profileFollowing.classList.add('hidden');
                    profileFollowers.classList.add('hidden');
                } else if (tabName === 'following') {
                    profileRooms.classList.add('hidden');
                    profileFollowing.classList.remove('hidden');
                    profileFollowers.classList.add('hidden');
                } else {
                    profileRooms.classList.add('hidden');
                    profileFollowing.classList.add('hidden');
                    profileFollowers.classList.remove('hidden');
                }
            });
        });
    }
    
    // Show auth container
    function showAuthContainer() {
        authContainer.classList.remove('hidden');
        mainContainer.classList.add('hidden');
        chatContainer.classList.add('hidden');
        directChatContainer.classList.add('hidden');
        userProfileView.classList.add('hidden');
    }
    
    // Show main container
    function showMainContainer() {
        authContainer.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        chatContainer.classList.add('hidden');
        directChatContainer.classList.add('hidden');
        userProfileView.classList.add('hidden');
    }
    
    // Show section
    function showSection(section) {
        // Hide all sections
        homeSection.classList.add('hidden');
        exploreSection.classList.add('hidden');
        messagesSection.classList.add('hidden');
        notificationsSection.classList.add('hidden');
        profileSection.classList.add('hidden');
        
        // Show selected section
        section.classList.remove('hidden');
    }
    
    // Set active nav button
    function setActiveNavButton(button) {
        // Remove active class from all nav buttons
        homeBtn.classList.remove('active');
        exploreBtn.classList.remove('active');
        messagesBtn.classList.remove('active');
        notificationsBtn.classList.remove('active');
        profileBtn.classList.remove('active');
        
        // Add active class to selected button
        button.classList.add('active');
    }
    
    // Show modal
    function showModal(modal) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    
    // Hide modal
    function hideModal(modal) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    
    // Load home section
    function loadHomeSection() {
        // Update global room count
        globalRoomCount.textContent = state.rooms.global.members.length;
        
        // Clear recent rooms container
        recentRoomsContainer.innerHTML = '';
        
        // Get user's recent rooms (excluding global)
        const userRooms = state.recentRooms.filter(roomId => roomId !== 'global');
        
        // Add room cards for each room
        userRooms.forEach(roomId => {
            const room = state.rooms[roomId];
            if (room) {
                const roomCard = createRoomCard(room);
                recentRoomsContainer.appendChild(roomCard);
            }
        });
        
        // Add event listeners to join room buttons
        document.querySelectorAll('.join-room-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const roomId = this.dataset.room;
                if (state.rooms[roomId].type === 'private' && !state.rooms[roomId].members.includes(state.currentUser)) {
                    // Show private room join modal
                    privateRoomName.textContent = state.rooms[roomId].name;
                    joinPrivateRoomForm.dataset.roomId = roomId;
                    privateRoomPassword.value = '';
                    showModal(joinPrivateRoomModal);
                } else {
                    joinRoom(roomId);
                }
            });
        });
    }
    
    // Load explore section
    function loadExploreSection() {
        // Clear explore rooms and users containers
        exploreRooms.innerHTML = '';
        exploreUsers.innerHTML = '';
        
        // Add public rooms to explore rooms container
        Object.values(state.rooms).forEach(room => {
            if (room.type === 'public') {
                const roomCard = createRoomCard(room);
                exploreRooms.appendChild(roomCard);
            }
        });
        
        // Add users to explore users container (excluding current user)
        state.users.forEach(user => {
            if (user.username !== state.currentUser) {
                const userCard = createUserCard(user);
                exploreUsers.appendChild(userCard);
            }
        });
        
        // Add event listeners to join room buttons
        exploreRooms.querySelectorAll('.join-room-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const roomId = this.dataset.room;
                joinRoom(roomId);
            });
        });
        
        // Add event listeners to follow buttons
        exploreUsers.querySelectorAll('.follow-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const username = this.dataset.username;
                toggleFollow(username);
                updateFollowButton(this, username);
            });
        });
        
        // Add event listeners to message buttons
        exploreUsers.querySelectorAll('.message-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const username = this.dataset.username;
                startDirectChat(username);
            });
        });
    }
    
    // Load messages section
    function loadMessagesSection() {
        // Clear chats and rooms lists
        chatsList.innerHTML = '';
        roomsList.innerHTML = '';
        
        // Add direct chats to chats list
        Object.keys(state.chats).forEach(chatId => {
            const chat = state.chats[chatId];
            if (chat.participants.includes(state.currentUser)) {
                const otherUser = chat.participants.find(p => p !== state.currentUser);
                const userData = state.users.find(u => u.username === otherUser);
                
                if (userData && chat.messages.length > 0) {
                    const lastMessage = chat.messages[chat.messages.length - 1];
                    const chatItem = createChatListItem(userData, lastMessage);
                    chatsList.appendChild(chatItem);
                }
            }
        });
        
        // Add rooms to rooms list
        state.recentRooms.forEach(roomId => {
            const room = state.rooms[roomId];
            if (room && room.members.includes(state.currentUser)) {
                const lastMessage = room.messages.length > 0 ? room.messages[room.messages.length - 1] : null;
                const roomItem = createRoomListItem(room, lastMessage);
                roomsList.appendChild(roomItem);
            }
        });
        
        // Add event listeners to chat list items
        chatsList.querySelectorAll('.chat-list-item').forEach(item => {
            item.addEventListener('click', function() {
                const username = this.dataset.username;
                startDirectChat(username);
            });
        });
        
        // Add event listeners to room list items
        roomsList.querySelectorAll('.chat-list-item').forEach(item => {
            item.addEventListener('click', function() {
                const roomId = this.dataset.roomId;
                joinRoom(roomId);
            });
        });
    }
    
    // Load notifications section
    function loadNotificationsSection() {
        // Clear notifications list
        const notificationsList = document.getElementById('notifications-list');
        notificationsList.innerHTML = '';
        
        // Add notifications
        state.notifications.forEach(notification => {
            const notificationItem = createNotificationItem(notification);
            notificationsList.appendChild(notificationItem);
        });
    }
    
    // Load profile section
    function loadProfileSection() {
        // Update profile information
        profileUsername.textContent = state.currentUserData.username;
        profileFullname.textContent = state.currentUserData.fullname;
        profileBio.textContent = state.currentUserData.bio;
        profileAvatarImg.src = state.currentUserData.avatar;
        
        // Update stats
        followingCount.textContent = state.currentUserData.following.length;
        followersCount.textContent = state.currentUserData.followers.length;
        roomsCount.textContent = state.currentUserData.rooms.length;
        
        // Clear profile content containers
        profileRooms.innerHTML = '';
        profileFollowing.innerHTML = '';
        profileFollowers.innerHTML = '';
        
        // Add rooms to profile rooms container
        state.currentUserData.rooms.forEach(roomId => {
            const room = state.rooms[roomId];
            if (room) {
                const roomCard = createRoomCard(room);
                profileRooms.appendChild(roomCard);
            }
        });
        
        // Add following users to profile following container
        state.currentUserData.following.forEach(username => {
            const user = state.users.find(u => u.username === username);
            if (user) {
                const userCard = createUserCard(user);
                profileFollowing.appendChild(userCard);
            }
        });
        
        // Add follower users to profile followers container
        state.currentUserData.followers.forEach(username => {
            const user = state.users.find(u => u.username === username);
            if (user) {
                const userCard = createUserCard(user);
                profileFollowers.appendChild(userCard);
            }
        });
        
        // Add event listeners to join room buttons
        profileRooms.querySelectorAll('.join-room-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const roomId = this.dataset.room;
                if (state.rooms[roomId].type === 'private') {
                    // Current user is the creator, so they can join without password
                    joinRoom(roomId);
                } else {
                    joinRoom(roomId);
                }
            });
        });
        
        // Add event listeners to follow buttons
        document.querySelectorAll('.follow-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const username = this.dataset.username;
                toggleFollow(username);
                updateFollowButton(this, username);
            });
        });
        
        // Add event listeners to message buttons
        document.querySelectorAll('.message-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const username = this.dataset.username;
                startDirectChat(username);
            });
        });
    }
    
    // View user profile
    function viewUserProfile(username) {
        const user = state.users.find(u => u.username === username);
        if (!user) return;
        
        state.viewingUser = username;
        
        // Update profile information
        userProfileUsername.textContent = user.username;
        userProfileFullname.textContent = user.fullname;
        userProfileBio.textContent = user.bio;
        userAvatarImg.src = user.avatar;
        
        // Update stats
        userFollowingCount.textContent = user.following.length;
        userFollowersCount.textContent = user.followers.length;
        userRoomsCount.textContent = user.rooms.length;
        
        // Update follow button
        if (state.currentUserData.following.includes(username)) {
            followUserBtn.textContent = 'Following';
            followUserBtn.classList.add('following');
        } else {
            followUserBtn.textContent = 'Follow';
            followUserBtn.classList.remove('following');
        }
        
        // Clear profile rooms container
        userProfileRooms.innerHTML = '';
        
        // Add public rooms to profile rooms container
        user.rooms.forEach(roomId => {
            const room = state.rooms[roomId];
            if (room && room.type === 'public') {
                const roomCard = createRoomCard(room);
                userProfileRooms.appendChild(roomCard);
            }
        });
        
        // Add event listeners to join room buttons
        userProfileRooms.querySelectorAll('.join-room-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const roomId = this.dataset.room;
                joinRoom(roomId);
            });
        });
        
        // Add event listeners to follow button
        followUserBtn.addEventListener('click', function() {
            toggleFollow(username);
            if (state.currentUserData.following.includes(username)) {
                this.textContent = 'Following';
                this.classList.add('following');
            } else {
                this.textContent = 'Follow';
                this.classList.remove('following');
            }
        });
        
        // Add event listener to message button
        messageUserBtn.addEventListener('click', function() {
            startDirectChat(username);
        });
        
        // Show user profile view
        directChatContainer.classList.add('hidden');
        mainContainer.classList.add('hidden');
        userProfileView.classList.remove('hidden');
    }
    
    // Create room card
    function createRoomCard(room) {
        const template = document.importNode(roomCardTemplate.content, true);
        const roomCard = template.querySelector('.room-card');
        
        // Set room information
        roomCard.querySelector('.room-name').textContent = room.name;
        roomCard.querySelector('.members-count').textContent = room.members.length;
        roomCard.querySelector('.room-description').textContent = room.description;
        
        // Set room type badge
        const roomTypeBadge = roomCard.querySelector('.room-type-badge');
        if (room.type === 'private') {
            roomTypeBadge.textContent = 'Private';
            roomTypeBadge.classList.add('badge', 'private');
        } else {
            roomTypeBadge.textContent = 'Public';
            roomTypeBadge.classList.add('badge', 'public');
        }
        
        // Set join button data
        const joinBtn = roomCard.querySelector('.join-room-btn');
        joinBtn.dataset.room = room.id;
        
        return roomCard;
    }
    
    // Create user card
    function createUserCard(user) {
        const template = document.importNode(userCardTemplate.content, true);
        const userCard = template.querySelector('.user-card');
        
        // Set user information
        userCard.querySelector('.user-card-avatar img').src = user.avatar;
        userCard.querySelector('.user-card-username').textContent = user.username;
        userCard.querySelector('.user-card-fullname').textContent = user.fullname;
        
        // Set follow button state
        const followBtn = userCard.querySelector('.follow-btn');
        followBtn.dataset.username = user.username;
        if (state.currentUserData.following.includes(user.username)) {
            followBtn.textContent = 'Following';
            followBtn.classList.add('following');
        }
        
        // Set message button data
        const messageBtn = userCard.querySelector('.message-btn');
        messageBtn.dataset.username = user.username;
        
        return userCard;
    }
    
    // Create chat list item
    function createChatListItem(user, lastMessage) {
        const template = document.importNode(chatListItemTemplate.content, true);
        const chatItem = template.querySelector('.chat-list-item');
        
        // Set chat information
        chatItem.dataset.username = user.username;
        chatItem.querySelector('.chat-item-avatar img').src = user.avatar;
        chatItem.querySelector('.chat-item-name').textContent = user.username;
        
        if (lastMessage) {
            chatItem.querySelector('.chat-item-message').textContent = lastMessage.text;
            chatItem.querySelector('.chat-item-time').textContent = lastMessage.time;
        } else {
            chatItem.querySelector('.chat-item-message').textContent = 'No messages yet';
            chatItem.querySelector('.chat-item-time').textContent = '';
        }
        
        return chatItem;
    }
    
    // Create room list item
    function createRoomListItem(room, lastMessage) {
        const template = document.importNode(chatListItemTemplate.content, true);
        const roomItem = template.querySelector('.chat-list-item');
        
        // Set room information
        roomItem.dataset.roomId = room.id;
        
        // Use a default avatar for rooms
        const avatarImg = roomItem.querySelector('.chat-item-avatar img');
        avatarImg.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(room.name)}&background=random`;
        
        roomItem.querySelector('.chat-item-name').textContent = room.name;
        
        if (lastMessage) {
            if (lastMessage.type === 'system') {
                roomItem.querySelector('.chat-item-message').textContent = lastMessage.text;
            } else {
                roomItem.querySelector('.chat-item-message').textContent = `${lastMessage.sender}: ${lastMessage.text}`;
            }
            roomItem.querySelector('.chat-item-time').textContent = lastMessage.time;
        } else {
            roomItem.querySelector('.chat-item-message').textContent = 'No messages yet';
            roomItem.querySelector('.chat-item-time').textContent = '';
        }
        
        return roomItem;
    }
    
    // Create notification item
    function createNotificationItem(notification) {
        const template = document.importNode(notificationItemTemplate.content, true);
        const notificationItem = template.querySelector('.notification-item');
        
        // Set notification information
        if (notification.type === 'follow') {
            const user = state.users.find(u => u.username === notification.from);
            if (user) {
                notificationItem.querySelector('.notification-avatar img').src = user.avatar;
                notificationItem.querySelector('.notification-text').textContent = `${user.username} started following you`;
                
                // Add action buttons if needed
                const actionBtn = notificationItem.querySelector('.notification-action-btn');
                if (!state.currentUserData.following.includes(user.username)) {
                    actionBtn.textContent = 'Follow Back';
                    actionBtn.classList.add('accept');
                    actionBtn.addEventListener('click', function() {
                        toggleFollow(user.username);
                        this.textContent = 'Following';
                        this.disabled = true;
                    });
                } else {
                    actionBtn.remove();
                }
            }
        } else if (notification.type === 'room_invite') {
            const user = state.users.find(u => u.username === notification.from);
            const room = state.rooms[notification.roomId];
            
            if (user && room) {
                notificationItem.querySelector('.notification-avatar img').src = user.avatar;
                notificationItem.querySelector('.notification-text').textContent = `${user.username} invited you to join ${room.name}`;
                
                // Add action buttons
                const actionBtn = notificationItem.querySelector('.notification-action-btn');
                actionBtn.textContent = 'Join';
                actionBtn.classList.add('accept');
                actionBtn.addEventListener('click', function() {
                    joinRoom(room.id);
                    this.textContent = 'Joined';
                    this.disabled = true;
                });
            }
        }
        
        notificationItem.querySelector('.notification-time').textContent = notification.time;
        
        if (notification.unread) {
            notificationItem.classList.add('unread');
        }
        
        return notificationItem;
    }
    
    // Toggle follow
    function toggleFollow(username) {
        const userIndex = state.currentUserData.following.indexOf(username);
        const targetUser = state.users.find(u => u.username === username);
        
        if (userIndex === -1) {
            // Follow user
            state.currentUserData.following.push(username);
            targetUser.followers.push(state.currentUser);
            
            // Add notification for the target user
            addNotification({
                type: 'follow',
                from: state.currentUser,
                to: username,
                time: formatTime(new Date()),
                unread: true
            });
        } else {
            // Unfollow user
            state.currentUserData.following.splice(userIndex, 1);
            const followerIndex = targetUser.followers.indexOf(state.currentUser);
            if (followerIndex !== -1) {
                targetUser.followers.splice(followerIndex, 1);
            }
        }
    }
    
    // Update follow button
    function updateFollowButton(button, username) {
        if (state.currentUserData.following.includes(username)) {
            button.textContent = 'Following';
            button.classList.add('following');
        } else {
            button.textContent = 'Follow';
            button.classList.remove('following');
        }
    }
    
    // Add notification
    function addNotification(notification) {
        state.notifications.unshift(notification);
        
        // Limit to 20 notifications
        if (state.notifications.length > 20) {
            state.notifications.pop();
        }
    }
    
    // Join a room
    function joinRoom(roomId) {
        // Check if room exists
        if (!state.rooms[roomId]) {
            alert('Room not found');
            return;
        }
        
        // Set current room
        state.currentRoom = roomId;
        
        // Add user to room members if not already there
        if (!state.rooms[roomId].members.includes(state.currentUser)) {
            state.rooms[roomId].members.push(state.currentUser);
        }
        
        // Add room to recent rooms
        addToRecentRooms(roomId);
        
        // Update UI
        currentRoomName.textContent = state.rooms[roomId].name;
        updateMembersCount();
        
        // Load messages
        loadMessages();
        
        // Show chat container
        mainContainer.classList.add('hidden');
        chatContainer.classList.remove('hidden');
        
        // Focus on message input
        messageInput.focus();
    }
    
    // Start direct chat
    function startDirectChat(username) {
        // Check if user exists
        const user = state.users.find(u => u.username === username);
        if (!user) {
            alert('User not found');
            return;
        }
        
        // Set current chat
        state.currentChat = username;
        
        // Create chat ID (sorted usernames to ensure consistency)
        const participants = [state.currentUser, username].sort();
        const chatId = participants.join('_');
        
        // Check if chat exists, if not create it
        if (!state.chats[chatId]) {
            state.chats[chatId] = {
                id: chatId,
                participants: participants,
                messages: []
            };
        }
        
        // Update UI
        chatUserAvatar.src = user.avatar;
        chatUserName.textContent = user.username;
        chatUserStatus.textContent = 'Online'; // Simulated status
        chatUserStatus.classList.add('online');
        
        // Load direct messages
        loadDirectMessages();
        
        // Show direct chat container
        mainContainer.classList.add('hidden');
        directChatContainer.classList.remove('hidden');
        
        // Focus on message input
        directMessageInput.focus();
    }
    
    // Add to recent rooms
    function addToRecentRooms(roomId) {
        // Remove room from recent rooms if already there
        const index = state.recentRooms.indexOf(roomId);
        if (index !== -1) {
            state.recentRooms.splice(index, 1);
        }
        
        // Add room to beginning of recent rooms
        state.recentRooms.unshift(roomId);
        
        // Limit to 10 recent rooms
        if (state.recentRooms.length > 10) {
            state.recentRooms.pop();
        }
    }
    
    // Load messages for current room
    function loadMessages() {
        chatMessages.innerHTML = '';
        
        if (state.rooms[state.currentRoom].messages.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.classList.add('empty-messages');
            emptyMessage.textContent = 'No messages yet. Be the first to send a message!';
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = 'var(--text-secondary)';
            emptyMessage.style.padding = '20px';
            chatMessages.appendChild(emptyMessage);
            return;
        }
        
        state.rooms[state.currentRoom].messages.forEach(message => {
            if (message.type === 'system') {
                const systemMessage = document.createElement('div');
                systemMessage.classList.add('system-message');
                systemMessage.textContent = message.text;
                systemMessage.style.textAlign = 'center';
                systemMessage.style.color = 'var(--text-secondary)';
                systemMessage.style.padding = '5px 0';
                systemMessage.style.fontSize = '12px';
                chatMessages.appendChild(systemMessage);
            } else {
                addMessageToUI(message);
            }
        });
        
        // Scroll to bottom
        scrollToBottom(chatMessages);
    }
    
    // Load direct messages for current chat
    function loadDirectMessages() {
        directChatMessages.innerHTML = '';
        
        // Create chat ID (sorted usernames to ensure consistency)
        const participants = [state.currentUser, state.currentChat].sort();
        const chatId = participants.join('_');
        
        if (!state.chats[chatId] || state.chats[chatId].messages.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.classList.add('empty-messages');
            emptyMessage.textContent = 'No messages yet. Start a conversation!';
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = 'var(--text-secondary)';
            emptyMessage.style.padding = '20px';
            directChatMessages.appendChild(emptyMessage);
            return;
        }
        
        state.chats[chatId].messages.forEach(message => {
            addDirectMessageToUI(message);
        });
        
        // Scroll to bottom
        scrollToBottom(directChatMessages);
    }
    
    // Add message to UI
    function addMessageToUI(message) {
        // Clone message template
        const messageNode = document.importNode(messageTemplate.content, true);
        const messageElement = messageNode.querySelector('.message');
        
        // Set message content
        const messageAvatar = messageNode.querySelector('.message-avatar img');
        const messageSender = messageNode.querySelector('.message-sender');
        const messageBody = messageNode.querySelector('.message-body');
        const messageTime = messageNode.querySelector('.message-time');
        const repliedMessage = messageNode.querySelector('.replied-message');
        const repliedContent = messageNode.querySelector('.replied-content');
        const messageMedia = messageNode.querySelector('.message-media');
        const messageImage = messageNode.querySelector('.message-image');
        const fileAttachment = messageNode.querySelector('.file-attachment');
        const fileName = messageNode.querySelector('.file-name');
        const downloadBtn = messageNode.querySelector('.download-btn');
        
        // Get user data for avatar
        const userData = state.users.find(u => u.username === message.sender);
        if (userData) {
            messageAvatar.src = userData.avatar;
        }
        
        messageSender.textContent = message.sender;
        messageBody.textContent = message.text;
        messageTime.textContent = message.time;
        
        // Check if it's a reply
        if (message.replyTo) {
            repliedMessage.classList.remove('hidden');
            repliedContent.textContent = message.replyTo.text;
        }
        
        // Check if it has media
        if (message.media) {
            messageMedia.classList.remove('hidden');
            
            if (message.media.type === 'image') {
                messageImage.classList.remove('hidden');
                messageImage.src = message.media.url;
                
                // Add click event to show image preview
                messageImage.addEventListener('click', function() {
                    previewImage.src = message.media.url;
                    imagePreviewModal.classList.remove('hidden');
                });
            } else {
                fileAttachment.classList.remove('hidden');
                fileName.textContent = message.media.name;
                downloadBtn.href = message.media.url;
            }
        }
        
        // Check if it's the current user's message
        if (message.sender === state.currentUser) {
            messageElement.classList.add('outgoing');
        }
        
        // Add reply functionality
        const replyBtn = messageNode.querySelector('.reply-btn');
        replyBtn.addEventListener('click', function() {
            state.replyingTo = message;
            replyText.textContent = message.text;
            replyContainer.classList.remove('hidden');
            messageInput.focus();
        });
        
        // Add message to chat
        chatMessages.appendChild(messageNode);
        
        // Scroll to bottom
        scrollToBottom(chatMessages);
    }
    
    // Add direct message to UI
    function addDirectMessageToUI(message) {
        // Clone message template
        const messageNode = document.importNode(messageTemplate.content, true);
        const messageElement = messageNode.querySelector('.message');
        
        // Set message content
        const messageAvatar = messageNode.querySelector('.message-avatar img');
        const messageSender = messageNode.querySelector('.message-sender');
        const messageBody = messageNode.querySelector('.message-body');
        const messageTime = messageNode.querySelector('.message-time');
        const repliedMessage = messageNode.querySelector('.replied-message');
        const repliedContent = messageNode.querySelector('.replied-content');
        const messageMedia = messageNode.querySelector('.message-media');
        const messageImage = messageNode.querySelector('.message-image');
        const fileAttachment = messageNode.querySelector('.file-attachment');
        const fileName = messageNode.querySelector('.file-name');
        const downloadBtn = messageNode.querySelector('.download-btn');
        
        // Get user data for avatar
        const userData = state.users.find(u => u.username === message.sender);
        if (userData) {
            messageAvatar.src = userData.avatar;
        }
        
        messageSender.textContent = message.sender;
        messageBody.textContent = message.text;
        messageTime.textContent = message.time;
        
        // Check if it's a reply
        if (message.replyTo) {
            repliedMessage.classList.remove('hidden');
            repliedContent.textContent = message.replyTo.text;
        }
        
        // Check if it has media
        if (message.media) {
            messageMedia.classList.remove('hidden');
            
            if (message.media.type === 'image') {
                messageImage.classList.remove('hidden');
                messageImage.src = message.media.url;
                
                // Add click event to show image preview
                messageImage.addEventListener('click', function() {
                    previewImage.src = message.media.url;
                    imagePreviewModal.classList.remove('hidden');
                });
            } else {
                fileAttachment.classList.remove('hidden');
                fileName.textContent = message.media.name;
                downloadBtn.href = message.media.url;
            }
        }
        
        // Check if it's the current user's message
        if (message.sender === state.currentUser) {
            messageElement.classList.add('outgoing');
        }
        
        // Add reply functionality
        const replyBtn = messageNode.querySelector('.reply-btn');
        replyBtn.addEventListener('click', function() {
            state.directReplyingTo = message;
            directReplyText.textContent = message.text;
            directReplyContainer.classList.remove('hidden');
            directMessageInput.focus();
        });
        
        // Add message to chat
        directChatMessages.appendChild(messageNode);
        
        // Scroll to bottom
        scrollToBottom(directChatMessages);
    }
    
    // Send message
    function sendMessage() {
        const text = messageInput.value.trim();
        if (!text) return;
        
        // Create message object
        const message = {
            sender: state.currentUser,
            text: text,
            time: formatTime(new Date()),
            type: 'user'
        };
        
        // Check if it's a reply
        if (state.replyingTo) {
            message.replyTo = {
                sender: state.replyingTo.sender,
                text: state.replyingTo.text
            };
            
            // Reset reply state
            state.replyingTo = null;
            replyContainer.classList.add('hidden');
        }
        
        // Add message to room
        state.rooms[state.currentRoom].messages.push(message);
        
        // Add message to UI
        addMessageToUI(message);
        
        // Clear input
        messageInput.value = '';
        
        // Clear typing indicator
        clearTimeout(state.typingTimeout);
        typingIndicator.classList.add('hidden');
    }
    
    // Send direct message
    function sendDirectMessage() {
        const text = directMessageInput.value.trim();
        if (!text) return;
        
        // Create chat ID (sorted usernames to ensure consistency)
        const participants = [state.currentUser, state.currentChat].sort();
        const chatId = participants.join('_');
        
        // Create message object
        const message = {
            sender: state.currentUser,
            text: text,
            time: formatTime(new Date()),
            type: 'user'
        };
        
        // Check if it's a reply
        if (state.directReplyingTo) {
            message.replyTo = {
                sender: state.directReplyingTo.sender,
                text: state.directReplyingTo.text
            };
            
            // Reset reply state
            state.directReplyingTo = null;
            directReplyContainer.classList.add('hidden');
        }
        
        // Add message to chat
        state.chats[chatId].messages.push(message);
        
        // Add message to UI
        addDirectMessageToUI(message);
        
        // Clear input
        directMessageInput.value = '';
        
        // Clear typing indicator
        clearTimeout(state.directTypingTimeout);
        directTypingIndicator.classList.add('hidden');
    }
    
    // Add system message
    function addSystemMessage(roomId, text) {
        const message = {
            text: text,
            time: formatTime(new Date()),
            type: 'system'
        };
        
        // Add message to room
        state.rooms[roomId].messages.push(message);
        
        // Reload messages if in current room
        if (state.currentRoom === roomId) {
            loadMessages();
        }
    }
    
    // Show typing indicator
    function showTypingIndicator() {
        // Clear previous timeout
        clearTimeout(state.typingTimeout);
        
        // Show typing indicator
        typingIndicator.classList.remove('hidden');
        typingIndicator.querySelector('span').textContent = 'Someone is typing';
        
        // Set timeout to hide typing indicator after 2 seconds
        state.typingTimeout = setTimeout(function() {
            typingIndicator.classList.add('hidden');
        }, 2000);
    }
    
    // Show direct typing indicator
    function showDirectTypingIndicator() {
        // Clear previous timeout
        clearTimeout(state.directTypingTimeout);
        
        // Show typing indicator
        directTypingIndicator.classList.remove('hidden');
        directTypingIndicator.querySelector('span').textContent = `${state.currentUser} is typing`;
        
        // Set timeout to hide typing indicator after 2 seconds
        state.directTypingTimeout = setTimeout(function() {
            directTypingIndicator.classList.add('hidden');
        }, 2000);
    }
    
    // Show room info
    function showRoomInfo() {
        const room = state.rooms[state.currentRoom];
        
        modalRoomName.textContent = room.name;
        modalRoomDescription.querySelector('p').textContent = room.description;
        
        // Set room type badge
        if (room.type === 'private') {
            roomTypeBadge.textContent = 'Private';
            roomTypeBadge.className = 'badge private';
        } else {
            roomTypeBadge.textContent = 'Public';
            roomTypeBadge.className = 'badge public';
        }
        
        // Update members list
        roomMembersList.innerHTML = '';
        room.members.forEach(member => {
            const memberItem = document.createElement('li');
            
            // Get user data
            const userData = state.users.find(u => u.username === member);
            
            if (userData) {
                memberItem.innerHTML = `
                    <div class="member-avatar">
                        <img src="${userData.avatar}" alt="${userData.username}">
                    </div>
                    <div class="member-name">${userData.username}</div>
                    ${member === room.creator ? '<div class="member-role admin">Admin</div>' : ''}
                `;
            } else {
                memberItem.innerHTML = `
                    <div class="member-avatar">
                        <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(member)}" alt="${member}">
                    </div>
                    <div class="member-name">${member}</div>
                    ${member === room.creator ? '<div class="member-role admin">Admin</div>' : ''}
                `;
            }
            
            roomMembersList.appendChild(memberItem);
        });
        
        // Show modal
        showModal(roomInfoModal);
    }
    
    // Update members count
    function updateMembersCount() {
        const count = state.rooms[state.currentRoom].members.length;
        roomMembersCount.textContent = count === 1 ? '1 member' : `${count} members`;
    }
    
    // Handle file upload
    function handleFileUpload(file) {
        // In a real app, this would upload the file to a server
        // For this demo, we'll use a data URL
        
        if (file.type.startsWith('image/')) {
            // Handle image file
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                
                // Create message object with image
                const message = {
                    sender: state.currentUser,
                    text: 'Sent an image',
                    time: formatTime(new Date()),
                    type: 'user',
                    media: {
                        type: 'image',
                        url: imageUrl,
                        name: file.name
                    }
                };
                
                // Check if it's a reply
                if (state.replyingTo) {
                    message.replyTo = {
                        sender: state.replyingTo.sender,
                        text: state.replyingTo.text
                    };
                    
                    // Reset reply state
                    state.replyingTo = null;
                    replyContainer.classList.add('hidden');
                }
                
                // Add message to room
                state.rooms[state.currentRoom].messages.push(message);
                
                // Add message to UI
                addMessageToUI(message);
            };
            reader.readAsDataURL(file);
        } else {
            // Handle other file types
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileUrl = e.target.result;
                
                // Create message object with file
                const message = {
                    sender: state.currentUser,
                    text: 'Sent a file',
                    time: formatTime(new Date()),
                    type: 'user',
                    media: {
                        type: 'file',
                        url: fileUrl,
                        name: file.name
                    }
                };
                
                // Check if it's a reply
                if (state.replyingTo) {
                    message.replyTo = {
                        sender: state.replyingTo.sender,
                        text: state.replyingTo.text
                    };
                    
                    // Reset reply state
                    state.replyingTo = null;
                    replyContainer.classList.add('hidden');
                }
                
                // Add message to room
                state.rooms[state.currentRoom].messages.push(message);
                
                // Add message to UI
                addMessageToUI(message);
            };
            reader.readAsDataURL(file);
        }
    }
    
    // Handle direct file upload
    function handleDirectFileUpload(file) {
        // Create chat ID (sorted usernames to ensure consistency)
        const participants = [state.currentUser, state.currentChat].sort();
        const chatId = participants.join('_');
        
        if (file.type.startsWith('image/')) {
            // Handle image file
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                
                // Create message object with image
                const message = {
                    sender: state.currentUser,
                    text: 'Sent an image',
                    time: formatTime(new Date()),
                    type: 'user',
                    media: {
                        type: 'image',
                        url: imageUrl,
                        name: file.name
                    }
                };
                
                // Check if it's a reply
                if (state.directReplyingTo) {
                    message.replyTo = {
                        sender: state.directReplyingTo.sender,
                        text: state.directReplyingTo.text
                    };
                    
                    // Reset reply state
                    state.directReplyingTo = null;
                    directReplyContainer.classList.add('hidden');
                }
                
                // Add message to chat
                state.chats[chatId].messages.push(message);
                
                // Add message to UI
                addDirectMessageToUI(message);
            };
            reader.readAsDataURL(file);
        } else {
            // Handle other file types
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileUrl = e.target.result;
                
                // Create message object with file
                const message = {
                    sender: state.currentUser,
                    text: 'Sent a file',
                    time: formatTime(new Date()),
                    type: 'user',
                    media: {
                        type: 'file',
                        url: fileUrl,
                        name: file.name
                    }
                };
                
                // Check if it's a reply
                if (state.directReplyingTo) {
                    message.replyTo = {
                        sender: state.directReplyingTo.sender,
                        text: state.directReplyingTo.text
                    };
                    
                    // Reset reply state
                    state.directReplyingTo = null;
                    directReplyContainer.classList.add('hidden');
                }
                
                // Add message to chat
                state.chats[chatId].messages.push(message);
                
                // Add message to UI
                addDirectMessageToUI(message);
            };
            reader.readAsDataURL(file);
        }
    }
    
    // Format time
    function formatTime(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    // Scroll chat to bottom
    function scrollToBottom(container) {
        container.scrollTop = container.scrollHeight;
    }
    
    // Initialize the app
    init();
});
