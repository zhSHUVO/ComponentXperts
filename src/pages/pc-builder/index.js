/* eslint-disable @next/next/no-img-element */

import RootLayout from "@/components/Layouts/RootLayout";
import { useBuilder } from "@/utils/BuilderContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const PcBuilder = () => {
    const router = useRouter();
    const { state } = useBuilder();

    const isBuildComplete = Object.values(state).filter(Boolean).length >= 5;

    const handleCompleteBuild = async () => {
        try {
            const response = await fetch(
                "https://componentxperts-server.onrender.com/api/pc-build",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(state),
                }
            );

            if (response.ok) {
                toast.success("Build Complete Successfull");
                router.push("/");
            } else {
                console.error("Failed to post PC build data");
            }
        } catch (error) {
            console.error("Error posting PC build data:", error);
        }
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">
                Build Your Dream PC
            </h1>
            <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                <div className="grid lg:grid-cols-[10%_20%_60%_10%] grid-cols-[10%_20%_50%_20%] items-center">
                    <h1>CPU</h1>
                    <div className="flex justify-center">
                        <img
                            src={state?.CPU?.img || "/assets/category/cpu.png"}
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>{state?.CPU?.name ? state?.CPU?.name : "NONE"}</h1>
                    <Link
                        href={`/pc-builder/choose/CPU`}
                        className="btn btn-primary"
                    >
                        Choose
                    </Link>
                </div>
            </div>

            <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                <div className="grid lg:grid-cols-[10%_20%_60%_10%] grid-cols-[10%_20%_50%_20%] items-center">
                    <h1>Motherboard</h1>
                    <div className="flex justify-center">
                        <img
                            src={
                                state?.Motherboard?.img ||
                                "/assets/category/motherboard.png"
                            }
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>
                        {state?.Motherboard?.name
                            ? state?.Motherboard?.name
                            : "NONE"}
                    </h1>
                    <Link
                        href={`/pc-builder/choose/Motherboard`}
                        className="btn btn-primary"
                    >
                        Choose
                    </Link>
                </div>
            </div>

            <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                <div className="grid lg:grid-cols-[10%_20%_60%_10%] grid-cols-[10%_20%_50%_20%] items-center">
                    <h1>RAM</h1>
                    <div className="flex justify-center">
                        <img
                            src={state?.RAM?.img || "/assets/category/ram.png"}
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>{state?.RAM?.name ? state?.RAM?.name : "NONE"}</h1>
                    <Link
                        href={`/pc-builder/choose/RAM`}
                        className="btn btn-primary"
                    >
                        Choose
                    </Link>
                </div>
            </div>

            <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                <div className="grid lg:grid-cols-[10%_20%_60%_10%] grid-cols-[10%_20%_50%_20%] items-center">
                    <h1>Storage</h1>
                    <div className="flex justify-center">
                        <img
                            src={
                                state?.["Storage Device"]?.img ||
                                "/assets/category/storage.png"
                            }
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>
                        {state?.["Storage Device"]?.name
                            ? state?.["Storage Device"]?.name
                            : "NONE"}
                    </h1>
                    <Link
                        href={`/pc-builder/choose/Storage Device`}
                        className="btn btn-primary"
                    >
                        Choose
                    </Link>
                </div>
            </div>

            <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                <div className="grid lg:grid-cols-[10%_20%_60%_10%] grid-cols-[10%_20%_50%_20%] items-center">
                    <h1>Monitor</h1>
                    <div className="flex justify-center">
                        <img
                            src={
                                state?.Monitor?.img ||
                                "/assets/category/monitor.png"
                            }
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>
                        {state?.Monitor?.name ? state?.Monitor?.name : "NONE"}
                    </h1>
                    <Link
                        href={`/pc-builder/choose/Monitor`}
                        className="btn btn-primary"
                    >
                        Choose
                    </Link>
                </div>
            </div>

            <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                <div className="grid lg:grid-cols-[10%_20%_60%_10%] grid-cols-[10%_20%_50%_20%] items-center">
                    <h1>PSU</h1>
                    <div className="flex justify-center">
                        <img
                            src={
                                state?.["Power Supply Unit"]?.img ||
                                "/assets/category/powersupply.png"
                            }
                            alt="logo"
                            width={20}
                            height={20}
                        />
                    </div>
                    <h1>
                        {state?.["Power Supply Unit"]?.name
                            ? state?.["Power Supply Unit"]?.name
                            : "NONE"}
                    </h1>
                    <Link
                        href={`/pc-builder/choose/Power Supply Unit`}
                        className="btn btn-primary"
                    >
                        Choose
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleCompleteBuild}
                    disabled={!isBuildComplete}
                    className="btn btn-wide btn-primary"
                >
                    Complete Build
                </button>
            </div>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function (page) {
    return <RootLayout>{page}</RootLayout>;
};
