class Commands {
    static namespace: string = 'uv';

    static CANVAS_INDEX_CHANGE_FAILED: string       = Commands.namespace + '.onAssetIndexChangeFailed';
    static CANVAS_INDEX_CHANGED: string             = Commands.namespace + '.onAssetIndexChanged';
    static CLOSE_ACTIVE_DIALOGUE: string            = Commands.namespace + '.onCloseActiveDialogue';
    static CLOSE_LEFT_PANEL: string                 = Commands.namespace + '.onCloseLeftPanel';
    static CLOSE_RIGHT_PANEL: string                = Commands.namespace + '.onCloseRightPanel';
    static CREATED: string                          = Commands.namespace + '.onCreated';
    static DOWN_ARROW: string                       = Commands.namespace + '.onDownArrow';
    static DOWNLOAD: string                         = Commands.namespace + '.onDownload';
    static EMBED: string                            = Commands.namespace + '.onEmbed';
    static END: string                              = Commands.namespace + '.onEnd';
    static ESCAPE: string                           = Commands.namespace + '.onEscape';
    static HIDE_DOWNLOAD_DIALOGUE: string           = Commands.namespace + '.onHideDownloadDialogue';
    static HIDE_EMBED_DIALOGUE: string              = Commands.namespace + '.onHideEmbedDialogue';
    static HIDE_EXTERNALCONTENT_DIALOGUE: string    = Commands.namespace + '.onHideExternalContentDialogue';
    static HIDE_GENERIC_DIALOGUE: string            = Commands.namespace + '.onHideGenericDialogue';
    static HIDE_HELP_DIALOGUE: string               = Commands.namespace + '.onHideHelpDialogue';
    static HIDE_MESSAGE: string                     = Commands.namespace + '.onHideMessage';
    static HIDE_OVERLAY: string                     = Commands.namespace + '.onHideOverlay';
    static HIDE_SETTINGS_DIALOGUE: string           = Commands.namespace + '.onHideSettingsDialogue';
    static HOME: string                             = Commands.namespace + '.onHome';
    static LEFT_ARROW: string                       = Commands.namespace + '.onLeftArrow';
    static LEFTPANEL_COLLAPSE_FULL_FINISH: string   = Commands.namespace + '.onLeftPanelCollapseFullFinish';
    static LEFTPANEL_COLLAPSE_FULL_START: string    = Commands.namespace + '.onLeftPanelCollapseFullStart';
    static LEFTPANEL_EXPAND_FULL_FINISH: string     = Commands.namespace + '.onLeftPanelExpandFullFinish';
    static LEFTPANEL_EXPAND_FULL_START: string      = Commands.namespace + '.onLeftPanelExpandFullStart';
    static LOAD: string                             = Commands.namespace + '.onLoad';
    static OPEN_LEFT_PANEL: string                  = Commands.namespace + '.onOpenLeftPanel';
    static OPEN_MEDIA: string                       = Commands.namespace + '.onOpenMedia';
    static OPEN_RIGHT_PANEL: string                 = Commands.namespace + '.onOpenRightPanel';
    static PAGE_DOWN: string                        = Commands.namespace + '.onPageDown';
    static PAGE_UP: string                          = Commands.namespace + '.onPageUp';
    static REDIRECT: string                         = Commands.namespace + '.onRedirect';
    static REFRESH: string                          = Commands.namespace + '.onRefresh';
    static RESIZE: string                           = Commands.namespace + '.onResize';
    static RETURN: string                           = Commands.namespace + '.onReturn';
    static RIGHT_ARROW: string                      = Commands.namespace + '.onRightArrow';
    static RIGHTPANEL_COLLAPSE_FULL_FINISH: string  = Commands.namespace + '.onRightPanelCollapseFullFinish';
    static RIGHTPANEL_COLLAPSE_FULL_START: string   = Commands.namespace + '.onRightPanelCollapseFullStart';
    static RIGHTPANEL_EXPAND_FULL_FINISH: string    = Commands.namespace + '.onRightPanelExpandFullFinish';
    static RIGHTPANEL_EXPAND_FULL_START: string     = Commands.namespace + '.onRightPanelExpandFullStart';
    static SEQUENCE_INDEX_CHANGED: string           = Commands.namespace + '.onSequenceIndexChanged';
    static SETTINGS_CHANGED: string                 = Commands.namespace + '.onSettingsChanged';
    static SHOW_DOWNLOAD_DIALOGUE: string           = Commands.namespace + '.onShowDownloadDialogue';
    static SHOW_EMBED_DIALOGUE: string              = Commands.namespace + '.onShowEmbedDialogue';
    static SHOW_EXTERNALCONTENT_DIALOGUE: string    = Commands.namespace + '.onShowExternalContentDialogue';
    static SHOW_GENERIC_DIALOGUE: string            = Commands.namespace + '.onShowGenericDialogue';
    static SHOW_HELP_DIALOGUE: string               = Commands.namespace + '.onShowHelpDialogue';
    static SHOW_MESSAGE: string                     = Commands.namespace + '.onShowMessage';
    static SHOW_OVERLAY: string                     = Commands.namespace + '.onShowOverlay';
    static SHOW_SETTINGS_DIALOGUE: string           = Commands.namespace + '.onShowSettingsDialogue';
    static THUMB_SELECTED: string                   = Commands.namespace + '.onThumbSelected';
    static TOGGLE_FULLSCREEN: string                = Commands.namespace + '.onToggleFullScreen';
    static UP_ARROW: string                         = Commands.namespace + '.onUpArrow';
    static UPDATE_SETTINGS: string                  = Commands.namespace + '.onUpdateSettings';
    static WINDOW_UNLOAD: string                    = Commands.namespace + '.onWindowUnload';
}

export = Commands;