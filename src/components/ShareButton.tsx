
import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Link as LinkIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonProps {
  result: string;
  nickname: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ result, nickname }) => {
  const shareText = `제 MBTI 유형은 ${result} (${nickname}) 입니다! 여러분의 성격 유형도 알아보세요!`;
  const shareUrl = window.location.href;
  
  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank", "width=600,height=400");
  };
  
  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
      toast({
        title: "링크가 복사되었습니다",
        description: "친구들에게 공유해보세요!",
        duration: 3000,
      });
    }).catch(() => {
      toast({
        variant: "destructive",
        title: "복사 실패",
        description: "링크 복사에 실패했습니다. 다시 시도해주세요.",
        duration: 3000,
      });
    });
  };
  
  return (
    <div className="flex flex-col items-center mt-6">
      <h3 className="text-lg font-semibold mb-3">결과 공유하기</h3>
      <div className="flex space-x-3">
        <Button 
          onClick={shareToFacebook} 
          variant="outline" 
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
          aria-label="Facebook에 공유"
        >
          <Facebook className="w-5 h-5" />
        </Button>
        <Button 
          onClick={shareToTwitter} 
          variant="outline" 
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
          aria-label="Twitter에 공유"
        >
          <Twitter className="w-5 h-5" />
        </Button>
        <Button 
          onClick={copyToClipboard} 
          variant="outline" 
          className="rounded-full w-12 h-12 p-0 flex items-center justify-center"
          aria-label="링크 복사"
        >
          <LinkIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ShareButton;
