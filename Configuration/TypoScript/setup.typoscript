plugin.tx_rollovercollection3_rollovereffect3 {
  view {
   templateRootPaths = EXT:rollovercollection3/Resources/Private/Templates/
   # templateRootPaths.1 = {$plugin.tx_rollovercollection3_rollovereffect3.view.templateRootPath}
   partialRootPaths = EXT:rollovercollection3/Resources/Private/Partials/
   # partialRootPaths.1 = {$plugin.tx_rollovercollection3_rollovereffect3.view.partialRootPath}
   layoutRootPaths.0 = EXT:rollovercollection3/Resources/Private/Layouts/
   # layoutRootPaths.1 = {$plugin.tx_rollovercollection3_rollovereffect3.view.layoutRootPath}
  }
  persistence {
    #storagePid = {$plugin.tx_rollovercollection3_rollovereffect3.persistence.storagePid}
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}


# button labels
lib.rollovercollection3.label.readMore = TEXT
lib.rollovercollection3.label.readMore {
  value =READ MORE
  lang.it= DETTAGLI
}


#
# bootstrap, add alternative and dynamic templates 
# based on TYPO3 version, fetched from ContentElementsv7 or ContentElementsv8
# this ensure compatibility with v. 7.6 and boostrap package 7.1.0 
# and with v. 8.7.x and bootstrap package 8.0.x
# for image, textmedia and media


tt_content.image.partialRootPaths {
         2750 = EXT:rollovercollection3/Resources/Private/Partials/ContentElementsv12/
         2750.stdWrap.if {
                value = 2750,2751,2752,2753,2754,2755,2756,2757,2758,2759
                isInList.field = layout
         }
}

tt_content.textmedia.partialRootPaths {
         2750 = EXT:rollovercollection3/Resources/Private/Partials/ContentElementsv12/
         2750.stdWrap.if {
                value = 2750,2751,2752,2753,2754,2755,2756,2757,2758,2759
                isInList.field = layout
         }
}

tt_content.media.partialRootPaths {
         2750 = EXT:rollovercollection3/Resources/Private/Partials/ContentElementsv12/
         2750.stdWrap.if {
                value = 2750,2751,2752,2753,2754,2755,2756,2757,2758,2759
                isInList.field = layout
         }
}

tt_content.textpic.partialRootPaths {
         2750 = EXT:rollovercollection3/Resources/Private/Partials/ContentElementsv12/
         2750.stdWrap.if {
                value = 2750,2751,2752,2753,2754,2755,2756,2757,2758,2759
                isInList.field = layout
         }
}


# tt_content settings for raw data output // title
tt_content.image.settings.R3titleRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.titleRawdataOutput}
tt_content.textpic.settings.R3titleRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.titleRawdataOutput}
tt_content.media.settings.R3titleRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.titleRawdataOutput}
tt_content.textmedia.settings.R2titleRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.titleRawdataOutput}

# tt_content settings for raw data output // caption
tt_content.image.settings.R3captionRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.captionRawdataOutput}
tt_content.textpic.settings.R3captionRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.captionRawdataOutput}
tt_content.media.settings.R3captionRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.captionRawdataOutput}
tt_content.textmedia.settings.R3captionRawdataOutput = {$plugin.tx_rollovercollection3_rollovereffect3.settings.captionRawdataOutput}

# tt_content settings for raw data output // caption
tt_content.image.settings.R3useButtonMore = {$plugin.tx_rollovercollection3_rollovereffect3.settings.useButtonMore}
tt_content.textpic.settings.R3useButtonMore = {$plugin.tx_rollovercollection3_rollovereffect3.settings.useButtonMore}
tt_content.media.settings.R3useButtonMore = {$plugin.tx_rollovercollection3_rollovereffect3.settings.useButtonMore}
tt_content.textmedia.settings.R3useButtonMore = {$plugin.tx_rollovercollection3_rollovereffect3.settings.useButtonMore}

# LESS inclusion
page.includeCSS {
      rollovercollection3 = EXT:rollovercollection3/Resources/Public/Scss/Theme/theme.scss
}
