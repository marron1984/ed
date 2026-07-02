"use client";

import { useReducer, useState } from "react";
import Link from "next/link";
import { reducer, initialState, type ConsultationState } from "./state";
import { ProgressBar } from "./ProgressBar";
import { Button, ButtonLink } from "@/components/ui/Button";
import {
  IntroStep,
  BasicStep,
  LifestyleStep,
  HistoryStep,
  SymptomStep,
  ReviewStep,
} from "./steps";
import { DoneStep } from "./DoneStep";
import { HeartPulse, ArrowLeft, ArrowRight } from "lucide-react";

const stepLabels = [
  "はじめに",
  "基本情報",
  "生活習慣",
  "既往歴・服薬",
  "症状・希望",
  "確認",
];

const stepTitles = [
  "オンライン問診を始めます",
  "基本情報を教えてください",
  "生活習慣について",
  "既往歴・服薬について",
  "気になる症状・ご希望",
  "ご入力内容の確認",
];

/** 各ステップが「次へ」に進める条件 */
function canProceed(step: number, state: ConsultationState): boolean {
  switch (step) {
    case 0:
      return true;
    case 1:
      return state.age !== null;
    case 2:
      return (
        state.smoking !== null &&
        state.drinking !== null &&
        state.exercise !== null
      );
    case 3:
      return state.history.length > 0;
    case 4:
      return state.symptoms.length > 0;
    case 5:
      return true;
    default:
      return false;
  }
}

const totalSteps = stepLabels.length;

export function ConsultationWizard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  if (submitted) {
    return <DoneStep />;
  }

  const proceedable = canProceed(step, state);
  const isLast = step === totalSteps - 1;

  const handleNext = () => {
    if (!proceedable) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (isLast) {
      setSubmitted(true);
      return;
    }
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const handlePrev = () => {
    setShowError(false);
    setStep((s) => Math.max(s - 1, 0));
  };

  return (
    <div className="min-h-screen bg-mist">
      <header className="border-b border-navy/10 bg-white">
        <div className="container-narrow flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-navy">
            <HeartPulse className="h-5 w-5 text-teal" />
            <span className="text-sm font-black">
              DHP CARE
              <span className="ml-2 text-[10px] font-bold text-gold">DEMO</span>
            </span>
          </Link>
          <Link href="/" className="text-xs font-bold text-navy/50 hover:text-navy">
            中止して戻る
          </Link>
        </div>
      </header>

      <main className="container-narrow py-10">
        <ProgressBar steps={stepLabels} current={step} />

        <div className="mt-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
          <h1 className="text-xl font-black text-navy sm:text-2xl">
            {stepTitles[step]}
          </h1>
          <div key={step} className="step-content mt-6">
            {step === 0 && <IntroStep />}
            {step === 1 && <BasicStep state={state} dispatch={dispatch} />}
            {step === 2 && <LifestyleStep state={state} dispatch={dispatch} />}
            {step === 3 && <HistoryStep state={state} dispatch={dispatch} />}
            {step === 4 && <SymptomStep state={state} dispatch={dispatch} />}
            {step === 5 && <ReviewStep state={state} dispatch={dispatch} />}
          </div>

          {showError && !proceedable && (
            <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              次へ進むには、必須項目を選択してください。
            </p>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          {step > 0 ? (
            <Button variant="ghost" onClick={handlePrev}>
              <ArrowLeft className="h-4 w-4" />
              前へ
            </Button>
          ) : (
            <ButtonLink href="/" variant="ghost">
              <ArrowLeft className="h-4 w-4" />
              トップへ
            </ButtonLink>
          )}

          <Button
            variant="primary"
            onClick={handleNext}
            className={!proceedable ? "opacity-60" : ""}
          >
            {step === 0 ? "無料で始める" : isLast ? "この内容で受け付ける" : "次へ"}
            {!isLast && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>

        <p className="mt-6 text-center text-xs text-navy/40">
          本サイトはデモ用モックです。実際の診療・決済・送信は行いません。
        </p>
      </main>
    </div>
  );
}
