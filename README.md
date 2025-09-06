This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Learn More

<details>
<summary>
To learn more about Next.js, take a look at the following resources:
</summary>
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

</details>

# react-burning-ritual

> A burning ritual is a ceremony that involves releasing the past. It is often performed on holidays like New Year's Eve. The goal is to let go of negativity, suffering, or pain, and focus on the present.

> [!TIP]
> demo: <https://entitycs.github.io/react-burning-ritual/>

> [!IMPORTANT]
> [accessibility]
>
> If adding custom controller (input) elements, strive to enable all of the following, at minimum:
 >
 > - [x] mouse
 > - [x] touch
 > - [x] keyboard

![Burning Ritual UX - Pipe Filter Controller drawio](https://github.com/entitycs/react-burning-ritual/assets/5684374/8b2a2866-d408-4fe3-8c39-cd028f0c0ac8)
*Testing mermaid flowchart TD (top-down) - currently fails silently, rendering as LR
```mermaid
---
config:
  flowchart:
    defaultRenderer: " "
---
flowchart TD 
    done2 --> onSubmit
    onOutput --> onSubmit.InputArch
    %% subgraph state0[Reducer Starting State]
    %%     inputData0[Input Data = '']
    %%     inputPreview0[Input Preview = '']
    %% end
    subgraph key
        A i0@ --> |per keystroke|B
        e[/component/]
        input:::InputClass
        output:::OutputClass
    end
    subgraph result[Result]
        %% inputData.result[inputData = null]
        inputPreview.result[inputPreview]
        inputData.result2[inputData] f1@--> |filter|inputPreview.result[inputPreview]:::OutputClass  
    end
    subgraph Reducer
        Type{InputType}
        result 
    end
    subgraph mif[MixedInputForm]
        Reducer
        input.mif[/input element/]:::InputClass
        submit.mif[/submit element/]:::SubmitClass
        %% onSubmit.mif[onSubmit] 
        %% state0
        input.mif i1@--> Type i2@--- |input|inputData.result2
        submit.mif --> Type --- |submit| done2
        inputPreview.result --- |submit|done2[\onSubmit/]:::SubmitClass
    end
    subgraph OptionPipe
        input.OptionPipe:::InputClass
        filterSet
        onOutput:::OutputClass
        onSubmit[(onSubmitToPipe)]
    end

    subgraph input.OptionPipe[input]
        mif
    end
    subgraph InputArchitecture
        onSubmit.InputArch[\onSubmit/]:::SubmitClass
        OptionPipe
    end
        %% onSubmit --> state0

    f1@{ animate: true }
    %% f2@{ animate: true }
    %% f3@{ animate: true }
    class i0,f1,f2,f3,i1,i2 animate
    class f2,f3 Lime
    %% class f1 Red
    classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite,stroke:#3c4D7c;
    classDef InputClass stroke-width:1px, stroke-dasharray:none, stroke:#734D3C, fill:#a2b8f3, color:#000000 
    classDef OutputClass stroke-width:1px, stroke-dasharray:none, stroke:#3c4D7c, fill:#a3dd5c, color:#222222 
    classDef SubmitClass stroke-width:2px, stroke-dasharray:none, stroke:#ff5555, fill:#000000, color:#ffffff
    classDef Lime stroke:#88ff88
    classDef Red stroke-width:2px,stroke:#ff5555
```

# Features

## Pipe & Filter Architecture

Filters can use the state of the item in the pipe, and/or the state of a set of one or more controllers to control the mutators to be applied to the submitted value

## Grid

Just wanted something on the end of the pipe other than a div element.  Dragged elements retain dragged position in grid; grid contents + positions are reset upon changes to the grid size.

## Knob

A digital knob component, using a novel css trick, and no trig/pi values - can you identify the trick?

## GridSizeControl

Another custom input component; attempts to use advanced styling over 2 native html slider elements - not necessarily the most friendly control, but natively accessible.

## Controller Accessibility

All controls are touch, mouse, and keyboard accessible.
