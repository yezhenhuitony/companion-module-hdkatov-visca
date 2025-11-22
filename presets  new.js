// presets.js - 修复版本
const { combineRgb } = require('@companion-module/base')

// 图标资源（保持不变）
const ICONS = {
    up: '6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIFJREFUKM+90EEKgzAQRmFDFy49ghcp5FquVPBighcRegHBjWDJ68D8U6F7m00+EnhkUlW3ru6rdyCV0INQzSg1zFLLKmU2aeCQQMEEJXIQORRsTLNyKJhNm3IoaPBg4mQorp2Mh1+00kKN307o/bZrpt5O/FlPU/c75X91/fPd6wPRD1eHyHEL4wAAAABJRU5ErkJggg==',
    down: 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIlJREFUKM/F0DEOwyAMBVAjDxk5Qo7CtdiClIv1KJF6gUpZIhXxY2zTDJ2benoS8LFN9MsKbYjxF2XRS1UZ4bCeGFztFmNqphURpidm146kpwFvLDYJpPQtLSLNoySyP2bRpoqih2oSFW8K3lYAxmJGXA88XMnjeuDmih7XA8vXvNeeqX6U6aY6AacbWAQNWOPUAAAAAElFTkSuQmCC',
    left: 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUKM+1kTEOgCAQBM9Q2JjwA/mJPA2fxlN4giWF8TRBBhMpbKSaZie3i8gPb4Y8FNZKGm8YIAONkNWacIruQLejy+gyug1dQhfRqZa0v6gYA6QfqSWapZnto1B6XdUuFaVHoJunr2MD21nIdJYUEhLYfoGmP777BKKIXC0eYSD5AAAAAElFTkSuQmCC',
    right: 'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHhJREFUKM+10LERgCAMQFE4CktHcBRWcRMYzVEcwdKCI+od+fGksVCq3/AuiXOfvZnaNXzRClVrEKtMLdSqP2RTRQAFMAFGwAlw7MAk0sAzGnhVoerLKg/F5Pv4NoFNZZNGpk9sxJYeLsDdL5T7S8IFOM/R3OZ+fQeQZV9pMy+bVgAAAABJRU5ErkJggg=='
};

// 简化的预设生成函数
function createSimplePreset(self, key, category, name, style, steps, feedbacks = []) {
    return {
        type: 'button',
        category,
        name,
        style,
        steps,
        feedbacks
    };
}

function createActionPreset(self, key, category, name, actionId, options = {}, style = {}) {
    const defaultStyle = {
        text: name,
        size: '14',
        color: combineRgb(255, 255, 255),
        bgcolor: combineRgb(0, 0, 0),
        ...style
    };

    return createSimplePreset(
        self,
        key,
        category,
        name,
        defaultStyle,
        [
            {
                down: [
                    {
                        actionId,
                        options
                    }
                ],
                up: []
            }
        ]
    );
}

function createTogglePreset(self, key, category, name, actionId, onValue, offValue, style = {}) {
    const defaultStyle = {
        text: name,
        size: '14',
        color: combineRgb(255, 255, 255),
        bgcolor: combineRgb(0, 0, 0),
        ...style
    };

    return createSimplePreset(
        self,
        key,
        category,
        name,
        defaultStyle,
        [
            {
                down: [
                    {
                        actionId,
                        options: { [actionId.split('_')[0]]: onValue }
                    }
                ],
                up: []
            }
        ]
    );
}

function createPTZPreset(self, key, category, name, panTilt, panSpeed = 10, tiltSpeed = 10, style = {}) {
    const defaultStyle = {
        text: '',
        size: 'auto',
        color: combineRgb(255, 255, 255),
        bgcolor: combineRgb(0, 0, 0),
        ...style
    };

    let command;
    if (panTilt === '04' || panTilt === '05') {
        command = `810106${panTilt}FF`;
    } else {
        const panHex = panSpeed.toString(16).padStart(2, '0');
        const tiltHex = tiltSpeed.toString(16).padStart(2, '0');
        command = `81010601${panHex}${tiltHex}${panTilt}FF`;
    }

    return createSimplePreset(
        self,
        key,
        category,
        name,
        defaultStyle,
        [
            {
                down: [
                    {
                        actionId: 'custom_action',
                        options: { custom: command }
                    }
                ],
                up: [
                    {
                        actionId: 'pan_tilt_action',
                        options: {
                            pan_tilt: '0303',
                            pan_speed: 1,
                            tilt_speed: 1
                        }
                    }
                ]
            }
        ]
    );
}

module.exports = function (self) {
    const presets = {};

    // 云台控制预设
    presets.ptz_up = createPTZPreset(
        self,
        'ptz_up',
        'Pan/Tilt',
        'Up',
        '0301',
        10,
        10,
        { png64: ICONS.up, pngalignment: 'center:center' }
    );

    presets.ptz_down = createPTZPreset(
        self,
        'ptz_down',
        'Pan/Tilt',
        'Down',
        '0302',
        10,
        10,
        { png64: ICONS.down, pngalignment: 'center:center' }
    );

    presets.ptz_left = createPTZPreset(
        self,
        'ptz_left',
        'Pan/Tilt',
        'Left',
        '0103',
        10,
        10,
        { png64: ICONS.left, pngalignment: 'center:center' }
    );

    presets.ptz_right = createPTZPreset(
        self,
        'ptz_right',
        'Pan/Tilt',
        'Right',
        '0203',
        10,
        10,
        { png64: ICONS.right, pngalignment: 'center:center' }
    );

    presets.ptz_home = createPTZPreset(
        self,
        'ptz_home',
        'Pan/Tilt',
        'Home',
        '04'
    );

    // 变焦预设
    presets.zoom_in = createActionPreset(
        self,
        'zoom_in',
        'Lens',
        'Zoom In',
        'zoom_in_action',
        { zoom_in: '3' }
    );

    presets.zoom_out = createActionPreset(
        self,
        'zoom_out',
        'Lens',
        'Zoom Out',
        'zoom_out_action',
        { zoom_out: '3' }
    );

    presets.zoom_stop = createActionPreset(
        self,
        'zoom_stop',
        'Lens',
        'Zoom Stop',
        'zoom_stop_action',
        {}
    );

    // 对焦预设
    presets.focus_auto = createActionPreset(
        self,
        'focus_auto',
        'Lens',
        'Focus Auto',
        'focus_action',
        { focus: '3802' }
    );

    presets.focus_manual = createActionPreset(
        self,
        'focus_manual',
        'Lens',
        'Focus Manual',
        'focus_action',
        { focus: '3803' }
    );

    // 白平衡预设
    presets.wb_auto = createActionPreset(
        self,
        'wb_auto',
        'White Balance',
        'WB Auto',
        'wb_action',
        { white_balance: '3500' }
    );

    presets.wb_indoor = createActionPreset(
        self,
        'wb_indoor',
        'White Balance',
        'WB Indoor',
        'wb_action',
        { white_balance: '3501' }
    );

    presets.wb_outdoor = createActionPreset(
        self,
        'wb_outdoor',
        'White Balance',
        'WB Outdoor',
        'wb_action',
        { white_balance: '3502' }
    );
    presets.wb_outdoor = createActionPreset(
        self,
        'wb_manual',
        'White Balance',
        'WB Manual',
        'wb_action',
        { white_balance: '3505' }
    );

    // 曝光预设
    presets.auto_exposure_full = createActionPreset(
        self,
        'auto_exposure_full',
        'Exposure',
        'Auto Exposure Full',
        'auto_exposure_action',
        { auto_exposure: '00' }
    );

    presets.auto_exposure_manual = createActionPreset(
        self,
        'auto_exposure_manual',
        'Exposure',
        'Auto Exposure Manual',
        'auto_exposure_action',
        { auto_exposure: '03' }
    );

    // 系统预设
    presets.menu_toggle = createActionPreset(
        self,
        'menu_toggle',
        'System',
        'Menu On/Off',
        'menu_action',
        {}
    );

    presets.menu_enter = createActionPreset(
        self,
        'menu_enter',
        'System',
        'Menu Enter',
        'menu_enter_action',
        {}
    );

    // 预设调用（0-9作为示例）
    for (let i = 0; i < 10; i++) {
        presets[`preset_recall_${i}`] = createActionPreset(
            self,
            `preset_recall_${i}`,
            'Presets',
            `Recall Preset ${i}`,
            'preset_action',
            {
                preset: '02',
                num: i
            }
        );

        presets[`preset_save_${i}`] = createActionPreset(
            self,
            `preset_save_${i}`,
            'Presets',
            `Save Preset ${i}`,
            'preset_action',
            {
                preset: '01',
                num: i
            }
        );
    }

    // 跟踪预设
    presets.auto_tracking_on = createTogglePreset(
        self,
        'auto_tracking_on',
        'Tracking',
        'Auto Tracking On',
        'auto_tracking_action',
        '02',
        '03'
    );

    presets.auto_tracking_off = createTogglePreset(
        self,
        'auto_tracking_off',
        'Tracking',
        'Auto Tracking Off',
        'auto_tracking_action',
        '03',
        '02'
    );

    console.log('Generated presets:', Object.keys(presets).length);
    self.setPresetDefinitions(presets);
};