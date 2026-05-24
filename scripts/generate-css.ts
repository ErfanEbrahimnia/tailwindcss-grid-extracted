import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import tailwind from "tailwindcss";
import postcss from "postcss";

async function main() {
  const baseCSS = [
    ...justifyContentClasses,
    ...justifyItemsClasses,
    ...justifySelfClasses,
    ...alignItemsClasses,
    ...alignSelfClasses,
    ...alignContentClasses,
    ...orderClasses,
    ...gapClasses,
  ];

  const flexCSS = [
    "flex",
    ...flexBasisClasses,
    ...flexDirectionClasses,
    ...flexWrapClasses,
    ...flexClasses,
    ...flexGrowClasses,
    ...flexShrinkClasses,
  ] as const;

  const gridCSS = [
    "grid",
    ...gridTemplateColumnsClasses,
    ...gridColumnClasses,
    ...gridTemplateRowsClasses,
    ...gridRowClasses,
    ...gridFlowClasses,
    ...gridAutoColumnsClasses,
    ...gridGapClasses,

    ...placeContentClasses,
    ...placeItemsClasses,
    ...placeSelfClasses,
  ] as const;

  await Promise.all([
    generateCSSFile([...baseCSS, ...flexCSS], "flex.css"),
    generateCSSFile([...baseCSS, ...gridCSS], "grid.css"),
    generateCSSFile([...baseCSS, ...flexCSS, ...gridCSS], "full.css"),
  ]);
}

async function generateCSSFile(
  classes: readonly string[],
  fileName: `${string}.css`
) {
  const css = [
    "@layer utilities {",
    "  .__generated-classes__ {",
    `    @apply ${classes.join(" ")};`,
    "  }",
    "}",
    "",
  ].join("\n");

  const result = await postcss([
    tailwind({ content: [{ raw: css, extension: "css" }] }),
  ]).process(`@tailwind utilities;`, { from: undefined });

  const outPath = join(
    dirname(fileURLToPath(import.meta.url)),
    "..",
    "styles",
    fileName
  );

  writeFileSync(outPath, result.css, "utf8");
}

const flexBasisClasses = [
  "basis-0",
  "basis-1",
  "basis-2",
  "basis-3",
  "basis-4",
  "basis-5",
  "basis-6",
  "basis-7",
  "basis-8",
  "basis-9",
  "basis-10",
  "basis-11",
  "basis-12",
  "basis-14",
  "basis-16",
  "basis-20",
  "basis-24",
  "basis-28",
  "basis-32",
  "basis-36",
  "basis-40",
  "basis-44",
  "basis-48",
  "basis-52",
  "basis-56",
  "basis-60",
  "basis-64",
  "basis-72",
  "basis-80",
  "basis-96",
  "basis-auto",
  "basis-px",
  "basis-0.5",
  "basis-1.5",
  "basis-2.5",
  "basis-3.5",
  "basis-1/2",
  "basis-1/3",
  "basis-2/3",
  "basis-1/4",
  "basis-2/4",
  "basis-3/4",
  "basis-1/5",
  "basis-2/5",
  "basis-3/5",
  "basis-4/5",
  "basis-1/6",
  "basis-2/6",
  "basis-3/6",
  "basis-4/6",
  "basis-5/6",
  "basis-1/12",
  "basis-2/12",
  "basis-3/12",
  "basis-4/12",
  "basis-5/12",
  "basis-6/12",
  "basis-7/12",
  "basis-8/12",
  "basis-9/12",
  "basis-10/12",
  "basis-11/12",
  "basis-full",
] as const;

const flexDirectionClasses = [
  "flex-row",
  "flex-row-reverse",
  "flex-col",
  "flex-col-reverse",
] as const;

const flexWrapClasses = [
  "flex-wrap",
  "flex-wrap-reverse",
  "flex-nowrap",
] as const;

const flexClasses = [
  "flex-1",
  "flex-auto",
  "flex-initial",
  "flex-none",
] as const;

const flexGrowClasses = ["grow", "grow-0"] as const;

const flexShrinkClasses = ["shrink", "shrink-0"] as const;

const orderClasses = [
  "order-1",
  "order-2",
  "order-3",
  "order-4",
  "order-5",
  "order-6",
  "order-7",
  "order-8",
  "order-9",
  "order-10",
  "order-11",
  "order-12",
  "order-first",
  "order-last",
  "order-none",
] as const;

const gridTemplateColumnsClasses = [
  "grid-cols-1",
  "grid-cols-2",
  "grid-cols-3",
  "grid-cols-4",
  "grid-cols-5",
  "grid-cols-6",
  "grid-cols-7",
  "grid-cols-8",
  "grid-cols-9",
  "grid-cols-10",
  "grid-cols-11",
  "grid-cols-12",
  "grid-cols-none",
  "grid-cols-subgrid",
] as const;

const gridColumnClasses = [
  "col-auto",
  "col-span-1",
  "col-span-2",
  "col-span-3",
  "col-span-4",
  "col-span-5",
  "col-span-6",
  "col-span-7",
  "col-span-8",
  "col-span-9",
  "col-span-10",
  "col-span-11",
  "col-span-12",
  "col-span-full",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
  "col-start-8",
  "col-start-9",
  "col-start-10",
  "col-start-11",
  "col-start-12",
  "col-start-13",
  "col-start-auto",
  "col-end-1",
  "col-end-2",
  "col-end-3",
  "col-end-4",
  "col-end-5",
  "col-end-6",
  "col-end-7",
  "col-end-8",
  "col-end-9",
  "col-end-10",
  "col-end-11",
  "col-end-12",
  "col-end-13",
  "col-end-auto",
] as const;

const gridTemplateRowsClasses = [
  "grid-rows-1",
  "grid-rows-2",
  "grid-rows-3",
  "grid-rows-4",
  "grid-rows-5",
  "grid-rows-6",
  "grid-rows-7",
  "grid-rows-8",
  "grid-rows-9",
  "grid-rows-10",
  "grid-rows-11",
  "grid-rows-12",
  "grid-rows-none",
  "grid-rows-subgrid",
] as const;

const gridRowClasses = [
  "row-auto",
  "row-span-1",
  "row-span-2",
  "row-span-3",
  "row-span-4",
  "row-span-5",
  "row-span-6",
  "row-span-7",
  "row-span-8",
  "row-span-9",
  "row-span-10",
  "row-span-11",
  "row-span-12",
  "row-span-full",
  "row-start-1",
  "row-start-2",
  "row-start-3",
  "row-start-4",
  "row-start-5",
  "row-start-6",
  "row-start-7",
  "row-start-8",
  "row-start-9",
  "row-start-10",
  "row-start-11",
  "row-start-12",
  "row-start-13",
  "row-start-auto",
  "row-end-1",
  "row-end-2",
  "row-end-3",
  "row-end-4",
  "row-end-5",
  "row-end-6",
  "row-end-7",
  "row-end-8",
  "row-end-9",
  "row-end-10",
  "row-end-11",
  "row-end-12",
  "row-end-13",
  "row-end-auto",
] as const;

const gridFlowClasses = [
  "grid-flow-row",
  "grid-flow-col",
  "grid-flow-dense",
  "grid-flow-row-dense",
  "grid-flow-col-dense",
] as const;

const gridAutoColumnsClasses = [
  "auto-cols-auto",
  "auto-cols-min",
  "auto-cols-max",
  "auto-cols-fr",
] as const;

const gapClasses = [
  "gap-0",
  "gap-px",
  "gap-0.5",
  "gap-1",
  "gap-1.5",
  "gap-2",
  "gap-2.5",
  "gap-3",
  "gap-3.5",
  "gap-4",
  "gap-5",
  "gap-6",
  "gap-7",
  "gap-8",
  "gap-9",
  "gap-10",
  "gap-11",
  "gap-12",
  "gap-14",
  "gap-16",
  "gap-20",
  "gap-24",
  "gap-28",
  "gap-32",
  "gap-36",
  "gap-40",
  "gap-44",
  "gap-48",
  "gap-52",
  "gap-56",
  "gap-60",
  "gap-64",
  "gap-72",
  "gap-80",
  "gap-96",
] as const;

const gridGapClasses = [
  "gap-x-0",
  "gap-y-0",
  "gap-x-px",
  "gap-y-px",
  "gap-x-0.5",
  "gap-y-0.5",
  "gap-x-1",
  "gap-y-1",
  "gap-x-1.5",
  "gap-y-1.5",
  "gap-x-2",
  "gap-y-2",
  "gap-2.5",
  "gap-x-2.5",
  "gap-y-2.5",
  "gap-x-3",
  "gap-y-3",
  "gap-3.5",
  "gap-x-3.5",
  "gap-y-3.5",
  "gap-x-4",
  "gap-y-4",
  "gap-x-5",
  "gap-y-5",
  "gap-x-6",
  "gap-y-6",
  "gap-x-7",
  "gap-y-7",
  "gap-x-8",
  "gap-y-8",
  "gap-x-9",
  "gap-y-9",
  "gap-x-10",
  "gap-y-10",
  "gap-x-11",
  "gap-y-11",
  "gap-x-12",
  "gap-y-12",
  "gap-x-14",
  "gap-y-14",
  "gap-x-16",
  "gap-y-16",
  "gap-x-20",
  "gap-y-20",
  "gap-x-24",
  "gap-y-24",
  "gap-x-28",
  "gap-y-28",
  "gap-x-32",
  "gap-y-32",
  "gap-x-36",
  "gap-y-36",
  "gap-x-40",
  "gap-y-40",
  "gap-x-44",
  "gap-y-44",
  "gap-x-48",
  "gap-y-48",
  "gap-x-52",
  "gap-y-52",
  "gap-x-56",
  "gap-y-56",
  "gap-x-60",
  "gap-y-60",
  "gap-x-64",
  "gap-y-64",
  "gap-x-72",
  "gap-y-72",
  "gap-x-80",
  "gap-y-80",
  "gap-x-96",
  "gap-y-96",
] as const;

const justifyContentClasses = [
  "justify-normal",
  "justify-start",
  "justify-end",
  "justify-center",
  "justify-between",
  "justify-around",
  "justify-evenly",
  "justify-stretch",
] as const;

const justifyItemsClasses = [
  "justify-items-start",
  "justify-items-end",
  "justify-items-center",
  "justify-items-stretch",
] as const;

const justifySelfClasses = [
  "justify-self-auto",
  "justify-self-start",
  "justify-self-end",
  "justify-self-center",
  "justify-self-stretch",
] as const;

const alignContentClasses = [
  "content-normal",
  "content-center",
  "content-start",
  "content-end",
  "content-between",
  "content-around",
  "content-evenly",
  "content-baseline",
  "content-stretch",
] as const;

const alignItemsClasses = [
  "items-start",
  "items-end",
  "items-center",
  "items-baseline",
  "items-stretch",
] as const;

const alignSelfClasses = [
  "self-auto",
  "self-start",
  "self-end",
  "self-center",
  "self-stretch",
  "self-baseline",
] as const;

const placeContentClasses = [
  "place-content-center",
  "place-content-start",
  "place-content-end",
  "place-content-between",
  "place-content-around",
  "place-content-evenly",
  "place-content-baseline",
  "place-content-stretch",
] as const;

const placeItemsClasses = [
  "place-items-start",
  "place-items-end",
  "place-items-center",
  "place-items-baseline",
  "place-items-stretch",
] as const;

const placeSelfClasses = [
  "place-self-auto",
  "place-self-start",
  "place-self-end",
  "place-self-center",
  "place-self-stretch",
] as const;

main();
