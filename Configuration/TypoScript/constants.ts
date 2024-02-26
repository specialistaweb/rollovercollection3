plugin.tx_rollovercollection3_rollovereffect3 {
  view {
    # cat=plugin.tx_rollovercollection3_rollovereffect3/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:rollovercollection3/Resources/Private/Templates/
    # cat=plugin.tx_rollovercollection3_rollovereffect3/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:rollovercollection3/Resources/Private/Partials/
    # cat=plugin.tx_rollovercollection3_rollovereffect3/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:rollovercollection3/Resources/Private/Layouts/

    #cat=plugin.tx_rollovercollection3_rollovereffect3/file; type=string; label=Path to template LESS folder 
    scssPath = EXT:rollovercollection3/Resources/Public/Scss/Theme/
  }
  persistence {
    # cat=plugin.tx_rollovercollection3_rollovereffect3//a; type=string; label=Default storage PID
    # storagePid =
  }
  settings {
    
    # cat=plugin.tx_rollovercollection3_rollovereffect3/settings; type=boolean; label= Caption raw data output / warning, possible security break!
    captionRawdataOutput = 0
    
    # cat=plugin.tx_rollovercollection3_rollovereffect3/settings; type=boolean; label= Use 'more' button or not; if not the whole image will be linked
    useButtonMore = 1
  }

}

# customsubcategory=1000=Size
# customsubcategory=1300=Colors
# customsubcategory=1400=Mask background



# add vars for bootstrap_package, that will be used with LESS, for my rollover effects
plugin.bootstrap_package {
  settings {
    scss {

        # cat=plugin.bootstrap_package:rollovercollection3/1000/1001/rollover3-block-maxwidth; type=string; label=$rollover3-block-maxwidth (px or %)
        rollover3-block-maxwidth = 100%
    
        # cat=plugin.bootstrap_package:rollovercollection3/1300/1301/rollover3-brand-primary; type=string; label=$rollover3-brand-primary:
        rollover3-brand-primary = #000

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1302/rollover3-title-textcolor; type=string; label=$rollover3-title-textcolor:
        rollover3-title-textcolor = white 

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1303/rollover3-title-bgcolor; type=string; label=$rollover3-title-bgcolor:
        rollover3-title-bgcolor = $rollover3-brand-primary 

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1304/rollover3-caption-textcolor; type=string; label=$rollover3-caption-textcolor:
        rollover3-caption-textcolor = white 

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1305/rollover3-caption-bgcolor; type=string; label=$rollover3-caption-bgcolor:
        rollover3-caption-bgcolor = transparent 

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1306/rollover3-button-textcolor; type=string; label=$rollover3-button-textcolor:
        rollover3-button-textcolor = white 

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1307/rollover3-button-bgcolor; type=string; label=$rollover3-button-bgcolor:
        rollover3-button-bgcolor = $rollover3-brand-primary 

        # cat=plugin.bootstrap_package:rollovercollection3/1300/1308/rollover3-button-hoverbgcolor; type=string; label=$rollover3-button-hover-color:
        rollover3-button-hover-bgcolor = lighten($rollover3-button-bgcolor,16)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1401/rollover3-mask-style1-bgcolor; type=string; label=$rollover3-mask-style1-bgcolor:
        rollover3-mask-style1-bgcolor = rgba(0,0,0,0.5)
  
        # cat=plugin.bootstrap_package:rollovercollection3/1400/1402/rollover3-mask-style2-bgcolor; type=string; label=$rollover3-mask-style2-bgcolor:
        rollover3-mask-style2-bgcolor = rgba(0,0,0,0.4)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1403/rollover3-mask-style3-bgcolor; type=string; label= $rollover3-mask-style3-bgcolor:
        rollover3-mask-style3-bgcolor = rgba(0,0,0,0.4)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1404/rollover3-mask-style4-bgcolor; type=string; label= $rollover3-mask-style4-bgcolor:
        rollover3-mask-style4-bgcolor = rgba(0,0,0,0.9)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1405/rollover3-mask-style5-bgcolor; type=string; label= $rollover3-mask-style5-bgcolor:
        rollover3-mask-style5-bgcolor = rgba(0,0,0,0.3)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1406/rollover3-mask-style6-bgcolor; type=string; label= $rollover3-mask-style6-bgcolor:
        rollover3-mask-style6-bgcolor = rgba(0,0,0,0.5)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1407/rollover3-mask-style7-bgcolor; type=string; label= $rollover3-mask-style7-bgcolor:
        rollover3-mask-style7-bgcolor = rgba(0,0,0,0.9)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1408/rollover3-mask-style8-bgcolor; type=string; label= $rollover3-mask-style8-bgcolor:
        rollover3-mask-style8-bgcolor = rgba(255,255,255,0.7)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1409/rollover3-mask-style9-bgcolor; type=string; label= $rollover3-mask-style9-bgcolor:
        rollover3-mask-style9-bgcolor = rgba(0,0,0,0.2)

        # cat=plugin.bootstrap_package:rollovercollection3/1400/1410/rollover3-mask-style10-bgcolor; type=string; label= $rollover3-mask-style10-bgcolor:
        rollover3-mask-style10-bgcolor= rgba(255,255,255,0.8)


    }
  }
}

