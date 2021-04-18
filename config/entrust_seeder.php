<?php

return [
    'role_structure' => [
        'admin' => [
            'users' => 'c,r,u,d',
            'admin' => 'c,r,u,d',
            'profile' => 'r,d'
        ],
        'lecturer' => [
            'users' => 'c,r,u',
            'profile' => 'r,u'
        ],
    ],
    'student' => [
        'admin' => [
            ['name' => "Admin", "email" => "admin@gmail.com", "password" => '123456'],
        ],
    ],
    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete',
    ],
];