
const Notification = ({ notification })=> {
    if (!notification.message) {
        return null
    }
        const baseStyle = {
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          fontWeight: "bold"
        }
      
        const styleMap = {
          success: { ...baseStyle, color: "green", border: "2px solid green" },
          error: { ...baseStyle, color: "red", border: "2px solid red" }
        }
      
        return (
          <div style={styleMap[notification.type] || baseStyle}>
            {notification.message}
          </div>
        )
}

export default Notification;