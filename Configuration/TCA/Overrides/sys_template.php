<?php

declare(strict_types=1);

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') or die();

// For sites still configured with TypoScript records (sys_template).
// Sites using site sets add the set "Rollovercollection 3 - OHE" instead.
ExtensionManagementUtility::addStaticFile(
    'rollovercollection3',
    'Configuration/TypoScript',
    'Rollovercollection 3 - OHE'
);
