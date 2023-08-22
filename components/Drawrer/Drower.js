"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";

// run "npm i" in terminal to install vaul before running

export function Drower2() {

    return (
        <Drawer.Root defaultOpen>
            <Drawer.Trigger asChild>
                <button>Open Drawer</button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className=" flex flex-col rounded-[40px] mt-24 fixed bottom-10 top-10 left-10 right-10">
                    <Drawer.Trigger asChild>
                        <button className=" text-black absolute top-0 right-0 border-0 bg-gray-500 rounded-full">
                            X
                        </button>
                    </Drawer.Trigger>
                    <div className="p-4 rounded-[20px] flex-1">
                        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                        <div className="max-w-md mx-auto">
                            
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}