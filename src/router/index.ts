import express, { Router } from "express";

import App from '../client/app';

const router:Router = express.Router();

router.get('/products', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.post('/products', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.get('/products/:id', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});


router.post('/products/:id/comment', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.patch('/products/:id/comment', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.delete('/products/:id/comment', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.get('/users/me/account', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

// issue request for pw reset email
router.get('/users/me/account/reset-password', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

// update called
router.patch('/users/me/account/reset-password', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.get('/products/:id/likes', (req, res) => {
    res.send(`${req.method.toString()} ${req.path}`);
});

router.get('/', (req, res) => {
    res.send(App);
});

export default router;