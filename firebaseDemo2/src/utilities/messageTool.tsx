import { showMessage } from "react-native-flash-message";

const failedLogin = 'Error: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'
const failedLoginT = 'Birçok başarısız oturum açma girişimi nedeniyle bu hesaba erişim geçici olarak devre dışı bırakıldı. Şifrenizi sıfırlayarak hemen geri yükleyebilir veya daha sonra tekrar deneyebilirsiniz.'

const userNotFound = 'Error: There is no user record corresponding to this identifier. The user may have been deleted.'
const userNotFoundT = 'Kullanıcı Bulunamadı.'

const invalidPassword = 'Error: The password is invalid or the user does not have a password.'
const invalidPasswordT = 'Şifre yanlış.'

const login = 'login'
const register = 'register'

const MessageTool = (receivedMessage: string) => {

    switch (receivedMessage) {
        case failedLogin:
            return message(failedLoginT, 'none')

        case userNotFound:
            return message(userNotFoundT, 'default', 5000)

        case invalidPassword:
            return message(invalidPasswordT, 'danger')

        case login:
            return message('Giriş Başarılı', 'success')

        case register:
            return message('Hesabınız Oluşturuldu', 'info')

        default:
            break;
    }
}

const message = (message: string, type?: any, duration?: number) => {
    showMessage({
        message: message,
        type: type ? type : 'default', // danger - default - info - none - success - wanging
        duration: duration ? duration : 3000
    })
}

export default MessageTool