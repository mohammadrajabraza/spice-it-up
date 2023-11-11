import BottomSheet, { BottomSheetRefProps } from 'components/BottomSheet';
import React, { useEffect, useRef } from 'react';

export class BottomSheetDriver {
  private static sheet: React.RefObject<BottomSheetRefProps>;
  static setSheet = (sheet: React.RefObject<BottomSheetRefProps>) => {
    BottomSheetDriver.sheet = sheet;
  };

  static toggle = () => {
    console.log(this.sheet)
    if (!BottomSheetDriver.sheet.current) return;
    if (BottomSheetDriver.sheet.current.isActive()) {
      BottomSheetDriver.sheet.current.scrollTo(0);
    } else {
      BottomSheetDriver.sheet.current.scrollTo(-230);
    }
  };
}

const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  useEffect(() => {
    BottomSheetDriver.setSheet(bottomSheetRef);
  }, [])
  
  return () => <BottomSheet ref={bottomSheetRef} />;
};

export default useBottomSheet;
