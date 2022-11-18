/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `QR code parse error, error = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `Error getting userMedia, error = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "The device doesn't support navigator.mediaDevices , only "
        + "supported cameraIdOrConfig in this case is deviceId parameter "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "Camera streaming not supported by the browser.";
    }

    public static unableToQuerySupportedDevices(): string {
        return "Unable to query supported devices, unknown error.";
    }

    public static insecureContextCameraQueryError(): string {
        return "Camera access is only supported in secure context like https "
        + "or localhost.";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return "扫描中";
    }

    public static idleStatus(): string {
        return "等待";
    }

    public static errorStatus(): string {
        return "错误";
    }

    public static permissionStatus(): string {
        return "权限";
    }

    public static noCameraFoundErrorStatus(): string {
        return "无摄像头";
    }

    public static lastMatch(decodedText: string): string {
        return `最后匹配: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "扫描器";
    }

    public static cameraPermissionTitle(): string {
        return "开启摄像头权限";
    }

    public static cameraPermissionRequesting(): string {
        return "正在开启摄像头权限";
    }

    public static noCameraFound(): string {
        return "未发现摄像头";
    }

    public static scanButtonStopScanningText(): string {
        return "停止扫描";
    }

    public static scanButtonStartScanningText(): string {
        return "开始扫描";
    }

    public static torchOnButton(): string {
        return "打开手电筒";
    }

    public static torchOffButton(): string {
        return "关闭手电筒";
    }

    public static torchOnFailedMessage(): string {
        return "无法打开手电筒";
    }

    public static torchOffFailedMessage(): string {
        return "无法关闭手电筒";
    }

    public static scanButtonScanningStarting(): string {
        return "正在启动摄像头";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "选择二维码图片";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "直接使用相机扫描";
    }

    public static selectCamera(): string {
        return "选择相机";
    }

    public static fileSelectionChooseImage(): string {
        return "选择图片";
    }

    public static fileSelectionChooseAnother(): string {
        return "选择另一个";
    }

    public static fileSelectionNoImageSelected(): string {
        return "未选择图像";
    }

    /** Prefix to be given to anonymous cameras. */
    public static anonymousCameraPrefix(): string {
        return "匿名摄像头";
    }

    public static dragAndDropMessage(): string {
        return "或放置要扫描的图像";
    }

    public static dragAndDropMessageOnlyImages(): string {
        return "或删除要扫描的图像";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static poweredBy(): string {
        return "Powered by ";
    }

    public static reportIssues(): string {
        return "Report issues";
    }
}
