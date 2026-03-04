# GC³I² – 2026 Committees Section Setup Guide

## Overview
This document provides setup instructions for the professional Committees section integrated into the conference landing page.

---

## Component Structure

### Files Created

1. **`/data/committees.ts`** - Data structure for all committee members organized by category
2. **`/components/CommitteeCard.tsx`** - Reusable component for individual committee member cards
3. **`/components/CommitteesSection.tsx`** - Main section component displaying all committees
4. **Updated `/app/conference/page.tsx`** - Integrated new Committees section into the conference page

---

## Image Setup - Critical Instructions

### Directory Structure
All committee profile images should be placed in:
```
/public/images/committee/
```

### Image Naming Convention
Images use the format: `first_last.jpg` (lowercase, underscores)

### Required Images
Place the following image files in `/public/images/committee/`:

#### Patron (1 image)
- `karthiya_banu.jpg` - Dr. Karthiya Banu

#### Conference Dignitaries (7 images)
- `r_ravanan.jpg` - Dr. R. Ravanan
- `k_karunagaran.jpg` - Shri. K. Karunagaran
- `c_sundar.jpg` - Dr. C. Sundar
- `j_indumathi.jpg` - Dr. J. Indumathi
- `k_chokkanathan.jpg` - Dr. K. Chokkanathan
- `p_m_anbumaran.jpg` - Dr. P. M. Anbumaran
- `shree_ranjan_natesan_velmurugan.jpg` - Shri. Shree Ranjan Natesan Velmurugan

#### Advisory Committee (4 images)
- `s_umarani.jpg` - Dr. S. Umarani
- `venkateswarlu_karumuri.jpg` - Dr. Venkateswarlu Karumuri
- `s_usharani.jpg` - Dr. S. Usharani
- `agnibha_das_majumdar.jpg` - Dr. Agnibha Das Majumdar

#### Technical & Media Team (2 images)
- `s_aravind.jpg` - Mr. S. Aravind
- `k_girinath.jpg` - Mr. K. Girinath

### Image Specifications
- **Format**: JPG/JPEG
- **Size**: Recommended 400x400px (will be displayed in 112x112px circles)
- **Quality**: High resolution (web-optimized)
- **Aspect Ratio**: Square (1:1) for best appearance in rounded circles

---

## Features & Styling

### Design Highlights
- ✅ **Responsive Grid Layout**
  - Patron: 1 column (centered)
  - Dignitaries: 3 columns on desktop, 2 on tablet, 1 on mobile
  - Advisory: 4 columns on desktop, 2 on tablet, 1 on mobile
  - Technical Team: 2 columns on desktop, 1 on mobile

- ✅ **Color Palette**
  - Primary: Amber-500/600 (#F59E0B)
  - Accent: Slate-900 (#0F172A)
  - Background: White with subtle borders

- ✅ **Interactive Elements**
  - Card hover effect: `shadow-lg` + `scale-105`
  - Smooth transitions (300ms duration)
  - Bottom accent bar appears on hover
  - Border animation on image container

- ✅ **Image Fallback**
  - If image fails to load, displays Lucide User icon
  - Graceful degradation with amber gradient background
  - No broken image placeholders

### Component Props

#### CommitteeCard Component
```typescript
interface CommitteeMember {
  id: string;                 // Unique identifier
  name: string;               // Full name
  role: string;              // Professional role/title
  organization: string;       // Organization/affiliation
  honors?: string;           // Awards/honors (optional)
  extra?: string;            // Additional info (optional)
  imageName?: string;        // Image filename (without .jpg)
}
```

---

## Customization Guide

### Adding New Committee Members
1. Edit `/data/committees.ts`
2. Add member object to appropriate section's `members` array
3. Add corresponding image to `/public/images/committee/`
4. Update `imageName` field to match filename (without .jpg)

### Modifying Grid Columns
Edit the `gridCols` property in `/data/committees.ts`:
```typescript
// Example: Change dignitaries to 2 columns on desktop
gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
```

### Changing Colors
Update Tailwind classes in components:
- **Text Colors**: Change `text-amber-*`, `text-slate-*`
- **Background Colors**: Modify `bg-amber-*`, `bg-slate-*`
- **Borders**: Update `border-amber-*`, `border-slate-*`

### Section Header Icons
Icons are defined in `CommitteesSection.tsx` using Lucide React:
- Patron: `Award`
- Dignitaries: `Users`
- Advisory: `Users2`
- Technical: `Briefcase`

---

## Navigation Integration

The Committees section is integrated into the conference page navigation:
- **Navigation Link**: "Committees" in sub-navbar menu
- **Scroll ID**: `#committees`
- **Auto-Active**: Sub-navbar highlights "Committees" when scrolled into view

---

## Responsive Behavior

### Desktop (1024px+)
- Full grid layout as defined
- Hover effects fully enabled
- All text visible without truncation

### Tablet (768px - 1023px)
- Adjusted number of columns (typically 2)
- Card hover effects maintained
- Optimized spacing

### Mobile (<768px)
- Single column layout
- Touch-friendly card spacing
- Hover effects adapt for touch devices

---

## Performance Tips

1. **Image Optimization**
   - Use web-optimized JPEGs (quality ~85-90)
   - Consider using WebP format with JPG fallback
   - Target 50-100KB per image

2. **Lazy Loading**
   - Images load lazily by default with Next.js Image component (if needed)
   - Consider implementing `IntersectionObserver` for viewport-based loading

3. **Caching**
   - Set proper cache headers for committee images
   - Images rarely change, safe to cache aggressively

---

## Troubleshooting

### Images Not Loading
1. ✅ Verify filename matches `first_last.jpg` format (lowercase)
2. ✅ Confirm file is in `/public/images/committee/` directory
3. ✅ Check image file extension (.jpg not .JPG or .jpeg)
4. ✅ Ensure image is valid and not corrupted

### Styling Issues
1. ✅ Verify Tailwind CSS is properly configured
2. ✅ Check Lucide icons are installed (`lucide-react`)
3. ✅ Ensure Next.js is in development or production mode

### Grid Layout Problems
1. ✅ Verify `gridCols` values match Tailwind syntax
2. ✅ Test responsive breakpoints (md:, lg:)
3. ✅ Clear browser cache and rebuild project

---

## Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Maintenance

### Regular Updates
- Update committee data in `/data/committees.ts` as needed
- Replace outdated images in `/public/images/committee/`
- Review styling annually for brand consistency

### Version History
- **v1.0** (March 2026) - Initial Committees section implementation

---

## Support & Questions

For additional customization or issues:
1. Review the component source files
2. Check Tailwind CSS and Lucide React documentation
3. Verify Next.js configuration

---
