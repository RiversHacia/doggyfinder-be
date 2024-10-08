// const YAML = require('yamljs');
const express = require('express');
const path = require('path');
const {upload} = require('./utils/upload.functions');

const routes = require('./routes/index');
// const swaggerUi = require('swagger-ui-express');

const router = express.Router();

// const swaggerDocument = YAML.load(path.resolve(__dirname, './swagger.yaml'));

// Check if uploads directory exists, if not, create it

// swagger
// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// api routes
// router.post('/api/register-pet', upload.single('petImage'), routes.registerpet);
router.post('/api/register-pet', routes.registerpet);
router.use('/api/fpw', routes.forgotpw);
router.use('/api/fpwv', routes.forgotverify);
router.use('/api/login', routes.login);
router.use('/api/logout', routes.logout);
router.use('/api/lost-pet-profile', routes.lostpetprofile);
// router.use('/api/lost-pets', upload.single('petImage'),routes.lostpets);
router.use('/api/lost-pets', routes.lostpets);
router.use('/api/me/:userId', routes.me);
router.use('/api/me/:userId/msg-count', routes.me);
router.use('/api/message/:messageId/action', routes.message);
router.use('/api/messages/:messageId?/:userId?', routes.messages);
router.use('/api/missing-pets', routes.missingpets);
router.use('/api/my-pets/:ownerId?/:petId?', routes.mypets);
router.use('/api/pet-profile', routes.petprofile);
router.use('/api/register', routes.register);
router.use('/api/token-refresh', routes.jwttokenrefresh);
router.use('/api/user-pass', routes.userpass);
router.use('/api/user-profile', routes.userprofile);
router.use('/api/user-profile-img', upload.single('profile_img'), routes.userprofilepic);
router.use('/api/pet-types', routes.pettypes);

// frontend routes
// Public routes
// router.get('/', (req, res) => { res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); });
// router.get('/home', (req, res) => { res.render('home', { title: 'Home Page' }); });
// router.get('/login', isLoggedIn, (req, res) => { res.render('react', { layout: 'react', title: 'Login', js: ['/dist/login.bundle.js'] }); });
// router.get('/logout', (req, res) => { res.render('react', { layout: 'react', title: 'Login', js: ['/dist/logout.bundle.js'] }); });
// router.get('/register', isLoggedIn, (req, res) => { res.render('react', { layout: 'react', title: 'Sign Up', js: ['/dist/register.bundle.js'] }); });
// router.get('/register-verify', isLoggedIn, (req, res) => { res.render('react', { layout: 'react', title: 'Activate Account', js: ['/dist/register-verify.bundle.js'] }); });
// router.get('/forgot-password', isLoggedIn, (req, res) => { res.render('react', { layout: 'react', title: 'Forgot Password', js: ['/dist/forgot-password.bundle.js'] }); });
// router.get('/forgot-verify', isLoggedIn, (req, res) => { res.render('react', { layout: 'react', title: 'Verify Identity', js: ['/dist/forgot-verify.bundle.js'] }); });

// Private routes
// router.get('/dashboard', isNotLoggedIn, (req, res) => { res.render('react', { layout: 'react', title: 'Sign Up', js: ['/dist/dashboard.bundle.js'] }); });

// catch-all route
router.get('*', (req, res) => { res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); });

module.exports = router;
