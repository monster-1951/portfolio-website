import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface AcknowledgementEmailProps {
  Name: string;
  Message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AcknowledgementEmail = ({
  Name,
  Message,
}: AcknowledgementEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Hello {Name} !</Preview>
      <Tailwind>
        <Body className="bg-slate-900 text-white my-auto mx-auto px-2 font-serif">
          <Container className="rounded my-[40px] mx-auto p-[20px] max-w-[465px] ">
            <Heading className="text-white text-[24px] text-center p-0 my-[30px] mx-0 font-bold">
              Thanks for your message !
            </Heading>
            <Text className="text-white text-[14px] leading-[24px] font-semibold">
              Hello {Name},
            </Text>
            <Text className="text-white text-[14px] leading-[24px]">
              We really appreciate your interest to make your business grow by
              working with us
              <Hr className="my-[16px] border-t-2 border-gray-300" />
              <strong>Your message is : {Message}</strong>
              <Hr className="my-[16px] border-t-2 border-gray-300" />
              Your message has been recieved and Shiva Shankar will respond to
              you shortly
              <Hr className="my-[16px] border-t-2 border-gray-300" />
              You can follow us on social media from the following buttons.
            </Text>
            <Section>
              <Row>
                <Column align="right">
                  <Section className="text-center mt-[32px] mb-[32px]">
                    <Button
                      className="bg-orange-600 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                      href={
                        "https://www.instagram.com/web_developer_shiva_shankar?igsh=MmxwdXg5NHhrbTUx"
                      }
                    >
                      Instagram
                    </Button>
                  </Section>
                </Column>
                <Column align="center">
                  <Section className="text-center mt-[32px] mb-[32px]">
                    <Button
                      className="bg-[#3558e4] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                      href={
                        "https://www.facebook.com/profile.php?id=61565198050357&mibextid=ZbWKwL"
                      }
                    >
                      Facebook
                    </Button>
                  </Section>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column align="left">
                  <Section className="text-center mt-[32px] mb-[32px]">
                    <Button
                      className="bg-[#1d78d4] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                      href={
                        "https://www.linkedin.com/in/shiva-shankar-web-developer-174a642b1/"
                      }
                    >
                      Linkedin
                    </Button>
                  </Section>
                </Column>
                <Column align="left">
                  <Section className="text-center mt-[32px] mb-[32px]">
                    <Button
                      className="bg-[#ecd346] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                      href={
                        "https://x.com/shiva_shankar_1?t=B_fOPtxQpv-UcKoDKKEMSA&s=09"
                      }
                    >
                      X(Twitter)
                    </Button>
                  </Section>
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column align="left">
                  <Section className="text-center mt-[32px] mb-[32px]">
                    <Button
                      className="bg-[#12c580] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                      href={baseUrl}
                    >
                      Visit our website
                    </Button>
                  </Section>
                </Column>
              </Row>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]"></Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AcknowledgementEmail;
