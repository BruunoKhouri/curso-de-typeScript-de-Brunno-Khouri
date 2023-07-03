import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {

        await mongoose.connect(dbUri);
        console.log("Conectou ao banco");

    } catch (e: any) {
        console.log("Não foi possivel conectar ao banco!");
        console.log(`Erro: ${e}`);
    }
}

export default connect;