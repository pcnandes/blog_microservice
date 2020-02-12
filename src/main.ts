import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as compression from "compression";
import * as helmet from "helmet";
import * as csurf from "csurf";
import * as rateLimit from "express-rate-limit";

async function bootstrap() {
  // aqui podem ser criadas configurações específicas de cors https://github.com/expressjs/cors#configuration-options
  // o ideal é deixar o mais restritivo possível (origin, methods, allowedHeaders, exposedHeaders, credentials)
  /* Default
  {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  } */
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(compression());
  app.enableCors();
  app.use(helmet());
  app.use(csurf());

  // configura segurança para tentativas de ataque do tipo força bruta
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // limit each IP to 100 requests per windowMs
    })
  );
  await app.listen(3000);
}
bootstrap();
