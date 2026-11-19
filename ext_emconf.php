<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'image rollover collection 3 - OHE',
    'description' => 'OHE: ten "Original Hover Effects" (from tympanus.net) for the content elements textmedia, media, textpic and image. Requires bootstrap_package (Bootstrap 5).',
    'category' => 'fe',
    'version' => '9.0.0',
    'state' => 'stable',
    'author' => 'Giulia Tuveri',
    'author_email' => 'gt@specialistaweb.it',
    'author_company' => 'Specialistaweb',
    'constraints' => [
        'depends' => [
            'php' => '8.2.0-8.5.99',
            'typo3' => '13.4.0-14.4.99',
            'bootstrap_package' => '16.0.0-16.99.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
