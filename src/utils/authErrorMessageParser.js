export default function(errorCode) {
    switch (errorCode) {
        case "auth/email-already-exists":
            return "E-mail Kullanımda!"
       case "auth/user-not-found":
            return "Kullanıcı Bulunamadı!"
             case "auth/invalid-email":
            return "Geçersiz E-Mail!"
            
        default:
            return errorCode //hic bir case e girmezse errorcode un kendisini don
   
    }
}