import { useRouter } from "next/router";
import { useEffect, useRef, useState, type FC } from "react";

import type { THeaderConfig, THeaderStyleConfig } from "../types";

import { BtnLogo, ToggleButton } from "../Header.styled";
import { CloseIcon, SearchIcon } from "../Icons";
import {
  MobileBtnContainer,
  OpenForm,
  OpenFormInput,
  ToggleForm,
  ToggleFormInput,
  ToogleBtnContainer,
} from "./SearchForm.styled";

type TSearchForm = {
  formConfig: THeaderConfig["search"];
  styleConfig?: THeaderStyleConfig["searchForm"];
  page?: THeaderConfig["page"];
};

export const SearchForm: FC<TSearchForm> = (props) => {
  const searchConfig = props.formConfig;
  const config = searchConfig.config;
  const form = searchConfig.form;

  const [isBtnClicked, setBtnState] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (
        containerRef.current != null &&
        !containerRef.current.contains(event.target as HTMLElement)
      ) {
        setBtnState(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isBtnClicked) {
      inputRef.current?.focus();
    }
  }, [isBtnClicked]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // prettier-ignore
    const searchQuery = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const targetTemplate = props.formConfig.monetizationConfig?.resultsTemplate
      ? props.formConfig.monetizationConfig?.resultsTemplate
      : null;
    if (props.page === "monetization") {
      setBtnState(false);
      const queryParams: string[] = [];
      if (targetTemplate != null) {
        router.query.tk = targetTemplate;
      }
      for (const key in router.query) {
        queryParams.push(`${key}=${router.query[key]}`);
      }
      queryParams.push(`s=${searchQuery}`);
      router.push(`/topic?${queryParams.join("&")}`);
    } else {
      router.push(`/search?s=${searchQuery}`);
    }
  };

  return (
    <>
      {config.toggle ? (
        <ToogleBtnContainer
          ref={containerRef}
          $customstyles={props.styleConfig?.toggleBtnContainer}
        >
          <ToggleButton
            type="button"
            $logoContainerStyles={props.styleConfig?.toggleBtn}
            $logoStyles={props.styleConfig?.toggleBtnLogo}
            onClick={() => setBtnState(!isBtnClicked)}
          >
            <BtnLogo $show={!isBtnClicked}>{SearchIcon}</BtnLogo>
            <BtnLogo $show={isBtnClicked}>{CloseIcon}</BtnLogo>
          </ToggleButton>
          <ToggleForm
            $customstyles={props.styleConfig?.formContainer}
            $isOpen={isBtnClicked}
            onSubmit={handleSearch}
          >
            <ToggleFormInput
              id="searchInput"
              name="searchInput"
              ref={inputRef}
              type="search"
              placeholder={form.placeholder}
              defaultValue={router.query.s}
              required
              $customstyles={props.styleConfig?.input}
              // onChange={(e) => setSearchValue(e.target.value)}
            />
            <ToggleButton
              type="submit"
              $logoContainerStyles={props.styleConfig?.formButton}
              $logoStyles={props.styleConfig?.formBtnLogo}
            >
              <BtnLogo $show>{SearchIcon}</BtnLogo>
            </ToggleButton>
          </ToggleForm>
        </ToogleBtnContainer>
      ) : (
        <>
          <OpenForm
            onSubmit={handleSearch}
            $customstyles={props.styleConfig?.formContainer}
          >
            <OpenFormInput
              id="searchInput"
              name="searchInput"
              type="search"
              placeholder={form.placeholder}
              defaultValue={router.query.s}
              required
              $customstyles={props.styleConfig?.input}
              // onChange={(e) => setSearchValue(e.target.value)}
            />
            <ToggleButton
              type="submit"
              $logoContainerStyles={props.styleConfig?.formButton}
              $logoStyles={props.styleConfig?.formBtnLogo}
            >
              <BtnLogo $show>{SearchIcon}</BtnLogo>
            </ToggleButton>
          </OpenForm>
          {!config.toggle ? (
            <MobileBtnContainer
              ref={containerRef}
              $customstyles={props.styleConfig?.phoneBtnContainer}
            >
              <ToggleButton
                type="button"
                $logoContainerStyles={props.styleConfig?.toggleBtn}
                $logoStyles={props.styleConfig?.toggleBtnLogo}
                onClick={() => setBtnState(!isBtnClicked)}
              >
                <BtnLogo $show={!isBtnClicked}>{SearchIcon}</BtnLogo>
                <BtnLogo $show={isBtnClicked}>{CloseIcon}</BtnLogo>
              </ToggleButton>
              <ToggleForm
                $customstyles={props.styleConfig?.formContainer}
                $isOpen={isBtnClicked}
                onSubmit={handleSearch}
              >
                <ToggleFormInput
                  id="searchInput"
                  name="searchInput"
                  ref={inputRef}
                  type="search"
                  placeholder={form.placeholder}
                  defaultValue={router.query.s}
                  required
                  $customstyles={props.styleConfig?.input}
                  // onChange={(e) => setSearchValue(e.target.value)}
                />
                <ToggleButton
                  type="submit"
                  $logoContainerStyles={props.styleConfig?.formButton}
                  $logoStyles={props.styleConfig?.formBtnLogo}
                >
                  <BtnLogo $show>{SearchIcon}</BtnLogo>
                </ToggleButton>
              </ToggleForm>
            </MobileBtnContainer>
          ) : null}
        </>
      )}
    </>
  );
};
