<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') or die();

(function () {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Rollovercollection3',
            'Rollovereffect3',
            'rollovereffect3'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('rollovercollection3', 'Configuration/TypoScript', 'OHE effects style1-10');

	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('rollovercollection3', 'constants', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection3/Configuration/TypoScript/constants.typoscript>"');
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('rollovercollection3', 'setup', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection3/Configuration/TypoScript/setup.typoscript>"');


})();

