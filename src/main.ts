import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
//An HTTP cookie is a small piece of data stored by the user's browser. Cookies were designed 
//to be a reliable mechanism for websites to remember stateful information. 
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:8080',
        credentials: true
    })

    await app.listen(8000);
}

bootstrap();
