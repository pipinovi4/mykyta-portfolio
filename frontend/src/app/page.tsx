import type { CSSProperties } from "react";
import { SiteHeader } from "@/components/site-header";
import { ProjectActions } from "@/components/project-actions";
import { homepageCopy, signalDesk, wizardEngine } from "@/content/framer-homepage";
import { profile } from "@/content/portfolio";

export default function Home() {
  return (
    <>
    <div id="main">
      <div className="framer-1huEy framer-W8jCc framer-MOsCW framer-upUDo framer-135pof" style={{"minHeight":"100vh","width":"auto"} as CSSProperties}>
        <SiteHeader />
        <div className="framer-Nrbp0 framer-MOsCW framer-4zUME framer-lKH10 framer-W8jCc framer-9D7EC framer-7BgbB framer-upUDo framer-DcEyP framer-72rtr7" style={{"minHeight":"100vh","width":"auto","display":"contents"} as CSSProperties}>
          <section className="framer-okgzbw" data-framer-name="Introduction" id="top">
            <div className="framer-1725tm9" data-framer-name="Introduction composition" style={{"opacity":"1","transform":"none","willChange":"transform"} as CSSProperties}>
              <div className="framer-1ibrol5" data-framer-name="Introduction copy">
                <div className="framer-ufth37" data-framer-name="Role" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                    {homepageCopy["role"]}
                  </p>
                </div>
                <div className="framer-1xwpd2g" data-framer-name="Backend systems from domain logic to deployment" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <h1 className="framer-text framer-styles-preset-k69abi" data-styles-preset="R_ejM4Rs3" dir="auto">
                    {homepageCopy["backend-systems-from-domain-logic-to-deployment"]}
                  </h1>
                </div>
                <div className="framer-ntre6k" data-framer-name="Introduction description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                    {homepageCopy["introduction-description"]}
                  </p>
                </div>
                <div className="framer-1drai9p" data-framer-name="Introduction actions">
                  <div className="framer-52lzcl-container" data-framer-name="Explore my work">
                    <a className="framer-tAoUq framer-W8jCc framer-1x445ui framer-v-1x445ui framer-19ldchy" data-framer-name="Primary" href="#work" style={{"--border-bottom-width":"0px","--border-color":"rgba(0, 0, 0, 0)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px","backgroundColor":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","opacity":"1"} as CSSProperties}>
                      <div className="framer-nnbdow" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","transform":"none","opacity":"1"} as CSSProperties}>
                        <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto" style={{"--framer-text-color":"var(--extracted-r6o4lv, var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc))"} as CSSProperties}>
                          {homepageCopy["label"]}
                        </p>
                      </div>
                      <svg className="framer-HfmfX framer-ws4c1l" role="presentation" viewBox="0 0 24 24" style={{"--1m973uw":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","--js9iwy":"2","opacity":"1"} as CSSProperties}>
                        <use href="#1475982494">

                        </use>
                      </svg>
                    </a>
                  </div>
                  <div className="framer-1fdpf1t-container" data-framer-name="Download CV">
                    <a className="framer-tAoUq framer-W8jCc framer-1x445ui framer-v-2cfh8q framer-19ldchy" data-framer-name="Download CV" href={profile.cv} download data-border="true" style={{"--border-bottom-width":"1px","--border-color":"var(--token-baaa5f13-7f4a-498c-adb8-a19a73452903)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px","backgroundColor":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","opacity":"1"} as CSSProperties}>
                      <div className="framer-nnbdow" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)","transform":"none","opacity":"1"} as CSSProperties}>
                        <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--extracted-r6o4lv, var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41))"} as CSSProperties}>
                          {homepageCopy["label-2"]}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="framer-1bsqlex" data-framer-name="Location and availability">
                  <div className="framer-bpcncs" data-framer-name="Location" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                      {homepageCopy["location"]}
                    </p>
                  </div>
                  <div className="framer-1djr0e2" data-framer-name="Availability">
                    <div className="framer-dwy310" data-framer-name="Available indicator">

                    </div>
                    <div className="framer-1dqft6u" data-framer-name="Available for B2B contracts" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                        {homepageCopy["available-for-b2b-contracts"]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-2jebgi" data-framer-name="Portrait and caption">
                <div className="framer-1rl0l8" data-border="true" data-framer-name="Portrait placeholder — replace with your photograph">
                  <div className="framer-1khnsei" data-framer-name="Portrait placeholder label" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <h3 className="framer-text framer-styles-preset-lg7ief" data-styles-preset="ZXY3q5bQH" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                      {homepageCopy["portrait-placeholder-label"]}
                    </h3>
                  </div>
                  <div className="framer-r8q106" data-framer-name="Portrait guidance" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                      {homepageCopy["portrait-guidance"]}
                    </p>
                  </div>
                </div>
                <div className="framer-pvztl4" data-framer-name="Portrait caption" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                    {homepageCopy["portrait-caption"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-1yey050" data-border="true" data-framer-name="Core technologies">
              <div className="framer-6qess2" data-framer-name="Core stack label" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                  {homepageCopy["core-stack-label"]}
                </p>
              </div>
              <div className="framer-ju0oj1" data-framer-name="Core technologies list" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                  {homepageCopy["core-technologies-list"]}
                </p>
              </div>
            </div>
          </section>
          <section className="framer-ngnk72" data-framer-name="Selected work" id="work">
            <div className="framer-z2v2h9" data-framer-name="Selected work heading">
              <div className="framer-1eiz0ac" data-framer-name="Selected work" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <h2 className="framer-text framer-styles-preset-2yp1g5" data-styles-preset="xYcgXQQ8k" dir="auto">
                  {homepageCopy["selected-work"]}
                </h2>
              </div>
              <div className="framer-1c29f79" data-framer-name="Selected work introduction" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                  {homepageCopy["selected-work-introduction"]}
                </p>
              </div>
            </div>
            <div className="framer-t0kvgl" data-framer-name="Featured project">
              <article className="framer-1zsqpk" data-framer-name="Featured project entry">
                <div className="framer-14qpcjm" data-border="true" data-framer-name="FinControl media — screenshot or walkthrough">
                  <div className="framer-sw07qv" data-framer-name="Product media placeholder">
                    <div className="framer-pgjw91" data-framer-name="Media placeholder notice" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {homepageCopy["media-placeholder-notice-4"]}
                      </p>
                    </div>
                    <div className="framer-1lrfn7g" data-framer-name="Project media title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{"--font-selector":"RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==","--framer-font-family":"\"Cabinet Grotesk\", \"Cabinet Grotesk Placeholder\", sans-serif","--framer-font-size":"76px","--framer-font-weight":"500","--framer-letter-spacing":"-2px","--framer-line-height":"1.1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                        {homepageCopy["project-media-title-4"]}
                      </p>
                    </div>
                    <div className="framer-1lf43og" data-framer-name="Media scope" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {homepageCopy["media-scope-2"]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-mrqj1j" data-framer-name="Featured project information">
                  <div className="framer-1twnhey" data-framer-name="Project name and category">
                    <div className="framer-k1bo7w" data-framer-name="Project title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-lg7ief" data-styles-preset="ZXY3q5bQH" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-title-4"]}
                      </h3>
                    </div>
                    <div className="framer-17c7g1t" data-framer-name="Project category" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-category-4"]}
                      </p>
                    </div>
                    <div className="framer-1g7z6jx" data-framer-name="Project status" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                        {homepageCopy["project-status-4"]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1f7g2ec" data-framer-name="Project description and links">
                    <div className="framer-pvz5t2" data-framer-name="Project description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-description-4"]}
                      </p>
                    </div>
                    <div className="framer-1l6ml8g" data-framer-name="Project technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-technologies-4"]}
                      </p>
                    </div>
                    <ProjectActions projectSlug="fincontrol" />
                  </div>
                </div>
              </article>
            </div>
            <div className="framer-qkyjbq" data-border="true" data-framer-name="Infrastructure projects">
              <article className="framer-1ooyju" data-framer-name="Featured project entry">
                <div className="framer-q32ivi" data-border="true" data-framer-name="FinControl media — screenshot or walkthrough">
                  <div className="framer-ijahhb" data-framer-name="Product media placeholder">
                    <div className="framer-uzm912" data-framer-name="Media placeholder notice" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {homepageCopy["media-placeholder-notice-2"]}
                      </p>
                    </div>
                    <div className="framer-1ksmke" data-framer-name="Project media title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{"--font-selector":"RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==","--framer-font-family":"\"Cabinet Grotesk\", \"Cabinet Grotesk Placeholder\", sans-serif","--framer-font-size":"34px","--framer-font-weight":"500","--framer-letter-spacing":"-0.6px","--framer-line-height":"1.1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                        {homepageCopy["project-media-title-2"]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1p86zwf" data-framer-name="Featured project information">
                  <div className="framer-cdnmge" data-framer-name="Project name and category">
                    <div className="framer-d1nzpk" data-framer-name="Project title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-a14fds" data-styles-preset="Esva1wUpy" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-title-2"]}
                      </h3>
                    </div>
                    <div className="framer-1rb2ls0" data-framer-name="Project category" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-category-2"]}
                      </p>
                    </div>
                    <div className="framer-u61r1d" data-framer-name="Project status" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                        {homepageCopy["project-status-2"]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-uw1f9v" data-framer-name="Project description and links">
                    <div className="framer-4px6et" data-framer-name="Project description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-description-2"]}
                      </p>
                    </div>
                    <div className="framer-rji20c" data-framer-name="Project technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-technologies-2"]}
                      </p>
                    </div>
                    <ProjectActions projectSlug="cloudflare-edge-guard" />
                  </div>
                </div>
              </article>
              <article className="framer-1ooyju" data-framer-name="Featured project entry">
                <div className="framer-q32ivi" data-border="true" data-framer-name="FinControl media — screenshot or walkthrough">
                  <div className="framer-ijahhb" data-framer-name="Product media placeholder">
                    <div className="framer-uzm912" data-framer-name="Media placeholder notice" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {homepageCopy["media-placeholder-notice-3"]}
                      </p>
                    </div>
                    <div className="framer-1ksmke" data-framer-name="Project media title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{"--font-selector":"RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==","--framer-font-family":"\"Cabinet Grotesk\", \"Cabinet Grotesk Placeholder\", sans-serif","--framer-font-size":"34px","--framer-font-weight":"500","--framer-letter-spacing":"-0.6px","--framer-line-height":"1.1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                        {homepageCopy["project-media-title-3"]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1p86zwf" data-framer-name="Featured project information">
                  <div className="framer-cdnmge" data-framer-name="Project name and category">
                    <div className="framer-d1nzpk" data-framer-name="Project title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-a14fds" data-styles-preset="Esva1wUpy" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-title-3"]}
                      </h3>
                    </div>
                    <div className="framer-1rb2ls0" data-framer-name="Project category" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-category-3"]}
                      </p>
                    </div>
                    <div className="framer-u61r1d" data-framer-name="Project status" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                        {homepageCopy["project-status-3"]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-uw1f9v" data-framer-name="Project description and links">
                    <div className="framer-4px6et" data-framer-name="Project description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-description-3"]}
                      </p>
                    </div>
                    <div className="framer-rji20c" data-framer-name="Project technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-technologies-3"]}
                      </p>
                    </div>
                    <ProjectActions projectSlug="ubuntu-vps-bootstrap" />
                  </div>
                </div>
              </article>
            </div>
            <div className="framer-jfov8q" data-framer-name="Wizard Engine project" id="wizard-engine">
              <article className="framer-18hqajh" data-border="true" data-framer-name="Featured project entry">
                <div className="framer-4e3n5s" data-border="true" data-framer-name="Wizard Engine overview">
                  <div className="framer-lci64e" data-framer-name="Product media placeholder">
                    <div className="framer-1793fcb" data-framer-name="Media placeholder notice" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {wizardEngine.mediaLabel}
                      </p>
                    </div>
                    <div className="framer-c3etys" data-framer-name="Project media title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{"--font-selector":"RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==","--framer-font-family":"\"Cabinet Grotesk\", \"Cabinet Grotesk Placeholder\", sans-serif","--framer-font-size":"48px","--framer-font-weight":"500","--framer-letter-spacing":"-1px","--framer-line-height":"1.1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                        {wizardEngine.title}
                      </p>
                    </div>
                    <div className="framer-1ozysiv" data-framer-name="Media scope" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {wizardEngine.mediaCaption}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1vruewu" data-framer-name="Featured project information">
                  <div className="framer-1hypb1e" data-framer-name="Project name and category">
                    <div className="framer-15n4kp8" data-framer-name="Project title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-lg7ief" data-styles-preset="ZXY3q5bQH" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {wizardEngine.title}
                      </h3>
                    </div>
                    <div className="framer-1anftq6" data-framer-name="Project category" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {wizardEngine.category}
                      </p>
                    </div>
                    <div className="framer-1443i0p" data-framer-name="Project status" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                        {wizardEngine.status}
                      </p>
                    </div>
                  </div>
                  <div className="framer-qrzjff" data-framer-name="Project description and links">
                    <div className="framer-18ihadi" data-framer-name="Project description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {wizardEngine.description}
                      </p>
                    </div>
                    <div className="framer-1jitg9c" data-framer-name="Project technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {wizardEngine.technologies}
                      </p>
                    </div>
                    <p className="framer-text framer-styles-preset-4elnqh">{wizardEngine.limitations}</p>
                    <ProjectActions project={wizardEngine} />
                  </div>
                </div>
              </article>
            </div>
            <div className="framer-jfov8q" data-framer-name="Engineering lab project">
              <article className="framer-18hqajh" data-border="true" data-framer-name="Featured project entry">
                <div className="framer-4e3n5s" data-border="true" data-framer-name="FinControl media — screenshot or walkthrough">
                  <div className="framer-lci64e" data-framer-name="Product media placeholder">
                    <div className="framer-1793fcb" data-framer-name="Media placeholder notice" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {homepageCopy["media-placeholder-notice"]}
                      </p>
                    </div>
                    <div className="framer-c3etys" data-framer-name="Project media title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{"--font-selector":"RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==","--framer-font-family":"\"Cabinet Grotesk\", \"Cabinet Grotesk Placeholder\", sans-serif","--framer-font-size":"48px","--framer-font-weight":"500","--framer-letter-spacing":"-1px","--framer-line-height":"1.1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                        {homepageCopy["project-media-title"]}
                      </p>
                    </div>
                    <div className="framer-1ozysiv" data-framer-name="Media scope" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {homepageCopy["media-scope"]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1vruewu" data-framer-name="Featured project information">
                  <div className="framer-1hypb1e" data-framer-name="Project name and category">
                    <div className="framer-15n4kp8" data-framer-name="Project title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-lg7ief" data-styles-preset="ZXY3q5bQH" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-title"]}
                      </h3>
                    </div>
                    <div className="framer-1anftq6" data-framer-name="Project category" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-category"]}
                      </p>
                    </div>
                    <div className="framer-1443i0p" data-framer-name="Project status" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                        {homepageCopy["project-status"]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-qrzjff" data-framer-name="Project description and links">
                    <div className="framer-18ihadi" data-framer-name="Project description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-description"]}
                      </p>
                    </div>
                    <div className="framer-1jitg9c" data-framer-name="Project technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {homepageCopy["project-technologies"]}
                      </p>
                    </div>
                    <ProjectActions projectSlug="backprop-lab" />
                  </div>
                </div>
              </article>
            </div>
            <div className="framer-jfov8q" data-framer-name="Personal startup project" id="signaldesk">
              <article className="framer-18hqajh" data-border="true" data-framer-name="Featured project entry">
                <div className="framer-4e3n5s" data-border="true" data-framer-name="SignalDesk development status">
                  <div className="framer-lci64e" data-framer-name="Product media placeholder">
                    <div className="framer-1793fcb" data-framer-name="Media placeholder notice" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {signalDesk.stage}
                      </p>
                    </div>
                    <div className="framer-c3etys" data-framer-name="Project media title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p dir="auto" className="framer-text" style={{"--font-selector":"RlM7Q2FiaW5ldCBHcm90ZXNrLW1lZGl1bQ==","--framer-font-family":"\"Cabinet Grotesk\", \"Cabinet Grotesk Placeholder\", sans-serif","--framer-font-size":"48px","--framer-font-weight":"500","--framer-letter-spacing":"-1px","--framer-line-height":"1.1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)"} as CSSProperties}>
                        {signalDesk.title}
                      </p>
                    </div>
                    <div className="framer-1ozysiv" data-framer-name="Media scope" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"center"} as CSSProperties}>
                        {signalDesk.mediaCaption}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-1vruewu" data-framer-name="Featured project information">
                  <div className="framer-1hypb1e" data-framer-name="Project name and category">
                    <div className="framer-15n4kp8" data-framer-name="Project title" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <h3 className="framer-text framer-styles-preset-lg7ief" data-styles-preset="ZXY3q5bQH" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {signalDesk.title}
                      </h3>
                    </div>
                    <div className="framer-1anftq6" data-framer-name="Project category" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {signalDesk.category}
                      </p>
                    </div>
                    <div className="framer-1443i0p" data-framer-name="Project status" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                        {signalDesk.status}
                      </p>
                    </div>
                  </div>
                  <div className="framer-qrzjff" data-framer-name="Project description and links">
                    <div className="framer-18ihadi" data-framer-name="Project description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {signalDesk.description}
                      </p>
                    </div>
                    <div className="framer-1jitg9c" data-framer-name="Project technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-alignment":"start"} as CSSProperties}>
                        {signalDesk.roadmap}
                      </p>
                    </div>
                    <ProjectActions project={signalDesk} />
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="framer-5nf0uz" data-framer-name="About" id="about">
            <div className="framer-ft35jb" data-border="true" data-framer-name="About composition">
              <div className="framer-1g2xb89" data-framer-name="Backend depth. Complete delivery." data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <h2 className="framer-text framer-styles-preset-2yp1g5" data-styles-preset="xYcgXQQ8k" dir="auto">
                  {homepageCopy["backend-depth-complete-delivery"]}
                </h2>
              </div>
              <div className="framer-sqnkug" data-framer-name="About text and working facts">
                <div className="framer-1vmcqge" data-framer-name="About Mykyta" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                    {homepageCopy["about-mykyta"]}
                  </p>
                </div>
                <div className="framer-1d2lax2" data-framer-name="Working facts">
                  <div className="framer-1azrd3p" data-framer-name="Focus">
                    <div className="framer-yj95ip" data-framer-name="Focus label" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                        {homepageCopy["focus-label"]}
                      </p>
                    </div>
                    <div className="framer-5szbe6" data-framer-name="Focus detail" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                        {homepageCopy["focus-detail"]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-iguaa9" data-framer-name="Working across">
                    <div className="framer-n5iz3c" data-framer-name="Working across label" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                        {homepageCopy["working-across-label"]}
                      </p>
                    </div>
                    <div className="framer-a2oizj" data-framer-name="Working across detail" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                        {homepageCopy["working-across-detail"]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1ofjdac" data-framer-name="Collaboration">
                    <div className="framer-ls1l33" data-framer-name="Collaboration label" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                        {homepageCopy["collaboration-label"]}
                      </p>
                    </div>
                    <div className="framer-d08qvx" data-framer-name="Collaboration detail" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                        {homepageCopy["collaboration-detail"]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-didbhp" data-framer-name="About links">
                  <div className="framer-sa2yw3-container" data-framer-name="View GitHub">
                    <a className="framer-tAoUq framer-W8jCc framer-1x445ui framer-v-2cfh8q framer-19ldchy" data-framer-name="Secondary" data-border="true" href="https://github.com/pipinovi4" target="_blank" style={{"--border-bottom-width":"1px","--border-color":"var(--token-baaa5f13-7f4a-498c-adb8-a19a73452903)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px","backgroundColor":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","opacity":"1"} as CSSProperties} rel="noreferrer">
                      <div className="framer-nnbdow" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)","transform":"none","opacity":"1"} as CSSProperties}>
                        <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--extracted-r6o4lv, var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41))"} as CSSProperties}>
                          {homepageCopy["label-3"]}
                        </p>
                      </div>
                      <svg className="framer-HfmfX framer-ws4c1l" role="presentation" viewBox="0 0 24 24" style={{"--1m973uw":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)","--js9iwy":"2","opacity":"1"} as CSSProperties}>
                        <use href="#1475982494">

                        </use>
                      </svg>
                    </a>
                  </div>
                  <div className="framer-1rbmlws-container" data-framer-name="Download CV">
                    <a className="framer-tAoUq framer-W8jCc framer-1x445ui framer-v-2cfh8q framer-19ldchy" data-framer-name="Download CV" href={profile.cv} download data-border="true" style={{"--border-bottom-width":"1px","--border-color":"var(--token-baaa5f13-7f4a-498c-adb8-a19a73452903)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px","backgroundColor":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","opacity":"1"} as CSSProperties}>
                      <div className="framer-nnbdow" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)","transform":"none","opacity":"1"} as CSSProperties}>
                        <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--extracted-r6o4lv, var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41))"} as CSSProperties}>
                          {homepageCopy["label-4"]}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="framer-1rc6h51" data-framer-name="Expertise" id="expertise">
            <div className="framer-g2xf24" data-framer-name="Expertise heading" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
              <h2 className="framer-text framer-styles-preset-2yp1g5" data-styles-preset="xYcgXQQ8k" dir="auto">
                {homepageCopy["expertise-heading"]}
              </h2>
            </div>
            <div className="framer-1iq0ead" data-framer-name="Engineering expertise">
              <div className="framer-1q9vqu5" data-border="true" data-framer-name="Backend systems">
                <div className="framer-3a9twx" data-framer-name="Backend systems heading" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <h3 className="framer-text framer-styles-preset-a14fds" data-styles-preset="Esva1wUpy" dir="auto">
                    {homepageCopy["backend-systems-heading"]}
                  </h3>
                </div>
                <div className="framer-19iul7s" data-framer-name="Backend scope and tools">
                  <div className="framer-1a08ru5" data-framer-name="Backend description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                      {homepageCopy["backend-description"]}
                    </p>
                  </div>
                  <div className="framer-11552g3" data-framer-name="Backend technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                      {homepageCopy["backend-technologies"]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-1mwe6ff" data-border="true" data-framer-name="Data and integrations">
                <div className="framer-ik7rsh" data-framer-name="Data and integrations heading" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <h3 className="framer-text framer-styles-preset-a14fds" data-styles-preset="Esva1wUpy" dir="auto">
                    {homepageCopy["data-and-integrations-heading"]}
                  </h3>
                </div>
                <div className="framer-17adk68" data-framer-name="Data scope and tools">
                  <div className="framer-1uspk1k" data-framer-name="Data description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                      {homepageCopy["data-description"]}
                    </p>
                  </div>
                  <div className="framer-1l8fk3l" data-framer-name="Data technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                      {homepageCopy["data-technologies"]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-1m06860" data-border="true" data-framer-name="Deployment and operations">
                <div className="framer-nad9ll" data-framer-name="Deployment and operations heading" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <h3 className="framer-text framer-styles-preset-a14fds" data-styles-preset="Esva1wUpy" dir="auto">
                    {homepageCopy["deployment-and-operations-heading"]}
                  </h3>
                </div>
                <div className="framer-10i3dg9" data-framer-name="Operations scope and tools">
                  <div className="framer-1s05ik4" data-framer-name="Operations description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                      {homepageCopy["operations-description"]}
                    </p>
                  </div>
                  <div className="framer-r1fl36" data-framer-name="Operations technologies" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                    <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                      {homepageCopy["operations-technologies"]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="framer-r1p4ab" data-framer-name="Contact" id="contact">
            <div className="framer-sj69ug" data-border="true" data-framer-name="Contact composition">
              <div className="framer-1c861xf" data-framer-name="Contact availability" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto" style={{"--framer-text-color":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)"} as CSSProperties}>
                  {homepageCopy["contact-availability"]}
                </p>
              </div>
              <div className="framer-1eqbv1v" data-framer-name="Let’s build something reliable" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <h2 className="framer-text framer-styles-preset-2yp1g5" data-styles-preset="xYcgXQQ8k" dir="auto">
                  {homepageCopy["let-s-build-something-reliable"]}
                </h2>
              </div>
              <div className="framer-1cbjw7k" data-framer-name="Contact description" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-1cb2cml" data-styles-preset="y6mgoTof0" dir="auto">
                  {homepageCopy["contact-description"]}
                </p>
              </div>
              <div className="framer-vnp3un" data-framer-name="Contact actions">
                <div className="framer-1aac9ce-container" data-framer-name="Start a conversation">
                  <a className="framer-tAoUq framer-W8jCc framer-1x445ui framer-v-1x445ui framer-19ldchy" data-framer-name="Primary" href="mailto:mykyta.bozhenko.dev@gmail.com" target="_blank" style={{"--border-bottom-width":"0px","--border-color":"rgba(0, 0, 0, 0)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px","backgroundColor":"var(--token-a4eba924-c011-472f-aeed-1200a9d5b2fe)","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","opacity":"1"} as CSSProperties} rel="noreferrer">
                    <div className="framer-nnbdow" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","transform":"none","opacity":"1"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto" style={{"--framer-text-color":"var(--extracted-r6o4lv, var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc))"} as CSSProperties}>
                        {homepageCopy["label-5"]}
                      </p>
                    </div>
                    <svg className="framer-HfmfX framer-ws4c1l" role="presentation" viewBox="0 0 24 24" style={{"--1m973uw":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","--js9iwy":"2","opacity":"1"} as CSSProperties}>
                      <use href="#1475982494">

                      </use>
                    </svg>
                  </a>
                </div>
                <div className="framer-1jz93wc-container" data-framer-name="Download CV">
                  <a className="framer-tAoUq framer-W8jCc framer-1x445ui framer-v-2cfh8q framer-19ldchy" data-framer-name="Download CV" href={profile.cv} download data-border="true" style={{"--border-bottom-width":"1px","--border-color":"var(--token-baaa5f13-7f4a-498c-adb8-a19a73452903)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px","backgroundColor":"var(--token-0eb1c362-ed95-4dd9-8398-8735d3e16efc)","borderBottomLeftRadius":"3px","borderBottomRightRadius":"3px","borderTopLeftRadius":"3px","borderTopRightRadius":"3px","opacity":"1"} as CSSProperties}>
                    <div className="framer-nnbdow" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{"--extracted-r6o4lv":"var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41)","transform":"none","opacity":"1"} as CSSProperties}>
                      <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto" style={{"--framer-text-alignment":"start","--framer-text-color":"var(--extracted-r6o4lv, var(--token-92eb2b79-9ae2-49a2-82a3-98019df59d41))"} as CSSProperties}>
                        {homepageCopy["label-6"]}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="framer-14qczgs" data-framer-name="Email address" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                  <a className="framer-text framer-styles-preset-18658i3" data-styles-preset="EnWmHBkBQ" href="mailto:mykyta.bozhenko.dev@gmail.com" rel="">
                    {homepageCopy["email-address"]}
                  </a>
                </p>
              </div>
              <div className="framer-1siurqu" data-framer-name="Social links and location">
                <div className="framer-pm1fp5" data-framer-name="GitHub" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                    <a className="framer-text framer-styles-preset-18658i3" data-styles-preset="EnWmHBkBQ" href="https://github.com/pipinovi4" target="_blank" rel="noreferrer">
                      {homepageCopy["github"]}
                    </a>
                  </p>
                </div>
                <div className="framer-47cqej" data-framer-name="LinkedIn" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                    <a className="framer-text framer-styles-preset-18658i3" data-styles-preset="EnWmHBkBQ" href="https://www.linkedin.com/in/mykyta-bozhenko-1b0663426/" target="_blank" rel="noreferrer">
                      {homepageCopy["linkedin"]}
                    </a>
                  </p>
                </div>
                <div className="framer-1h6nso1" data-framer-name="Location and remote work" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                  <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                    {homepageCopy["location-and-remote-work"]}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="overlay">

        </div>
        <div className="framer-swsfbh">

        </div>
        <footer className="framer-ek1u3f" data-border="true" data-framer-name="Footer">
          <div className="framer-un1xx7" data-framer-name="Footer identity and links">
            <div className="framer-lgfm6k" data-framer-name="Footer identity">
              <div className="framer-1e2r0pu" data-framer-name="Mykyta Bozhenko" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                  {homepageCopy["mykyta-bozhenko-2"]}
                </p>
              </div>
              <div className="framer-nf4m3l" data-framer-name="Footer role" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
                  {homepageCopy["footer-role"]}
                </p>
              </div>
            </div>
            <div className="framer-1s7kb1e" data-framer-name="GitHub" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
              <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                <a className="framer-text framer-styles-preset-18658i3" data-styles-preset="EnWmHBkBQ" href="https://github.com/pipinovi4" target="_blank" rel="noreferrer">
                  {homepageCopy["github-2"]}
                </a>
              </p>
            </div>
            <div className="framer-rthgdr" data-framer-name="LinkedIn" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
              <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                <a className="framer-text framer-styles-preset-18658i3" data-styles-preset="EnWmHBkBQ" href="https://www.linkedin.com/in/mykyta-bozhenko-1b0663426/" target="_blank" rel="noreferrer">
                  {homepageCopy["linkedin-2"]}
                </a>
              </p>
            </div>
            <a className="framer-13jxiu5 framer-16jpn44" data-framer-name="Back to top" href="#top">
              <div className="framer-1ssq84k" data-framer-name="Back to top label" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
                <p className="framer-text framer-styles-preset-1r4sqw4" data-styles-preset="oeSWK47RC" dir="auto">
                  {homepageCopy["back-to-top-label"]}
                </p>
              </div>
              <svg className="framer-dHrVN framer-8rhn2d" role="presentation" viewBox="0 0 24 24">
                <use href="#1247979269">

                </use>
              </svg>
            </a>
          </div>
          <div className="framer-18tibft" data-framer-name="Copyright" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}>
            <p className="framer-text framer-styles-preset-4elnqh" data-styles-preset="QNRP3LWP7" dir="auto">
              {homepageCopy["copyright"]}
            </p>
          </div>
        </footer>
      </div>
      <div id="template-overlay">

      </div>
    </div>
    <div id="svg-templates" aria-hidden="true" style={{"position":"absolute","overflowX":"hidden","overflowY":"hidden","bottom":"0px","left":"0px","width":"0px","height":"0px","zIndex":"0","contain":"strict"} as CSSProperties}>
      <svg id="1475982494" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 L 10 0 L 10 10" fill="transparent" height="10px" id="eMA3WLRa2" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 7)" width="10px">

        </path>
        <path d="M 0 10 L 10 0" fill="transparent" height="10px" id="GBl_xBBAR" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 7)" width="10px">

        </path>
      </svg>
      <svg id="1247979269" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 7 L 7 0 L 14 7" fill="transparent" height="7px" id="MVR4BRiZr" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 5)" width="14px">

        </path>
        <path d="M 0 14 L 0 0" fill="transparent" height="14px" id="gM_biTBPx" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 5)" width="1px">

        </path>
      </svg>
    </div>
    </>
  );
}
