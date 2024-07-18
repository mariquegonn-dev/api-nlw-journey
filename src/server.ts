import fastify from "fastify";
import cors from "@fastify/cors";
import { createTrip } from "./routes/trips/create-trip";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { confirmTrip } from "./routes/trips/confirm-trip";
import { getParticipants } from "./routes/participants/get-participants";
import { createInvite } from "./routes/trips/create-invite";

import { errorHandler } from "./error.handler";
import { env } from "./env";
import { confirmParticipant } from "./routes/participants/confirm-participant";
import { createActivity } from "./routes/activities/create-activity";
import { getActivities } from "./routes/activities/get-activities";
import { createLink } from "./routes/links/create-link";
import { getLinks } from "./routes/links/get-links";
import { updateTrip } from "./routes/trips/update-trip";
import { getTripDetails } from "./routes/trips/get-trip-details";
import { getParticipant } from "./routes/participants/get-participant";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(createActivity);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticipants);
app.register(createInvite);
app.register(updateTrip);
app.register(getTripDetails);
app.register(getParticipant);

app.listen({ port: env.PORT }).then(() => {
  console.log("Server running!");
});
