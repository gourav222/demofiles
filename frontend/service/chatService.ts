import axios from "axios";
export const getAllChats = async (token: any) => {
  // console.log(token,'---------==3rfubfnjrhk')
 
    return await axios.get("http://localhost:5000/api/v1/allChats", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  
};

export const getUser = async (token: any, phoneNumber: any) => {
  try {
    return await axios.post(
      "http://localhost:5000/api/v1/getUser",
      {
        phoneNumber: phoneNumber,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    // console.log("User Not Exists", err);
  }
};

export const accessChat = async (token: any, userId: any) => {
  return await axios.post(
    "http://localhost:5000/api/v1/accessChat",
    {
      userId: userId,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
}