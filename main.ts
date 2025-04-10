import postmanToOpenApi from "npm:postman-to-openapi";

const inputFile = Deno.env.get("INPUT_FILE");
const outputFile = Deno.env.get("OUTPUT_FILE");

if (!inputFile || !outputFile) {
  console.error("INPUT_FILE and OUTPUT_FILE must be set");
  Deno.exit(1);
}

const input = await Deno.readTextFile(inputFile);

await postmanToOpenApi(input, outputFile);
