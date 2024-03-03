import jwt from "jsonwebtoken";

const tokenData = (req) => {
    try {
        const token = req.cookies.get('token')?.value || '';
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);

        return decodedToken.id;
        
    } catch (error) {
        throw new Error(error.message);
    }
}

export default tokenData;