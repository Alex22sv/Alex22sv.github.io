"use client";
import Script from "next/script";

export function ReadingGoodreadsPage() {
    return (
        <>
            <div id="gr_custom_widget_1783469460" />

            <Script
                src="https://www.goodreads.com/review/custom_widget/199101900.Alexander's%20bookshelf:%20currently-reading?..."
                strategy="afterInteractive"
            />
        </>
    )
}


